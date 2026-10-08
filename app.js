const OMDB_API_KEY = "8accb253";
const DATA_VERSION = "20261008d";
const HISTORY_KEY = "roulette-history";

const LABELS = {
    movie: "Movie",
    series: "Series",
    action: "Action",
    comedy: "Comedy",
    drama: "Drama",
    horror: "Horror",
    scifi: "Sci-Fi",
    thriller: "Thriller"
};

const spinBtn = document.getElementById("spinBtn");
const poolCount = document.getElementById("poolCount");
const resultEl = document.getElementById("result");
const posterEl = document.getElementById("poster");
const titleEl = document.getElementById("title");
const metaEl = document.getElementById("meta");
const descriptionEl = document.getElementById("description");
const tagsEl = document.getElementById("tags");
const actionsEl = document.getElementById("actions");
const watchEl = document.getElementById("watch");
const pickLabel = document.getElementById("pickLabel");
const liveStatus = document.getElementById("liveStatus");
const catalogEl = document.getElementById("catalog");
const clearFiltersBtn = document.getElementById("clearFilters");
const historySection = document.getElementById("history");
const historyList = document.getElementById("historyList");
const tonightBtn = document.getElementById("tonightBtn");

let movies = [];
let watchById = {};
let current = null;
let mode = "daily";
let spinning = false;
let loaded = false;

const filters = {
    type: "all",
    category: "all",
    wildcard: false,
    year: ""
};

function readList(key) {
    try {
        const parsed = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function writeList(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        /* private mode */
    }
}

let history = readList(HISTORY_KEY);

function keyOf(movie) {
    return movie.imdb || `${movie.title}|${movie.year}|${movie.type}`;
}

function label(value) {
    return LABELS[value] || value || "";
}

function pool() {
    return movies.filter((movie) => {
        if (filters.type !== "all" && movie.type !== filters.type) return false;
        if (filters.category !== "all" && movie.category !== filters.category) return false;
        if (filters.wildcard && !movie.wildcard) return false;
        if (filters.year === "this" && movie.year !== new Date().getFullYear()) return false;
        if (filters.year === "pre2000" && movie.year >= 2000) return false;
        if (filters.year && filters.year !== "pre2000" && filters.year !== "this" && movie.year < Number(filters.year)) return false;
        return true;
    });
}

function filterKey() {
    return [filters.type, filters.category, filters.wildcard ? "w" : "", filters.year].join("|");
}

function hash(text) {
    let h = 2166136261;
    for (const char of text) {
        h ^= char.charCodeAt(0);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function dailyFrom(list) {
    const day = new Date().toISOString().slice(0, 10);
    return list[hash(`${day}|${filterKey()}`) % list.length];
}

function pickRandom(list) {
    const last = current ? keyOf(current) : "";
    const choices = list.filter((movie) => keyOf(movie) !== last);
    const bag = choices.length ? choices : list;
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return bag[buf[0] % bag.length];
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function filtersActive() {
    return filters.type !== "all" || filters.category !== "all" || filters.wildcard || filters.year;
}

function emptyCopy() {
    if (filters.wildcard) return "No unusual titles match these filters.";
    return "Nothing matches these filters.";
}

function setCount(list) {
    if (!loaded) return;
    if (!movies.length) {
        poolCount.textContent = "The shelf didn't load.";
        spinBtn.disabled = true;
        clearFiltersBtn.hidden = true;
        return;
    }
    const n = list.length;
    if (n === 0) {
        poolCount.textContent = emptyCopy();
        spinBtn.disabled = true;
        clearFiltersBtn.hidden = !filtersActive();
        return;
    }
    const noun = filters.wildcard ? (n === 1 ? "unusual title" : "unusual titles") : (n === 1 ? "title" : "titles");
    poolCount.textContent = n === 1 ? `1 ${noun} in this spin` : `${n.toLocaleString()} ${noun} in this spin`;
    spinBtn.disabled = spinning;
    clearFiltersBtn.hidden = !filtersActive();
}

function placeholderPoster() {
    posterEl.replaceChildren();
    const mark = document.createElement("div");
    mark.className = "poster-placeholder";
    mark.textContent = "🎬";
    posterEl.append(mark);
}

function setPoster(movie) {
    placeholderPoster();
    if (!movie.imdb) return;
    const img = new Image();
    const url = `https://img.omdbapi.com/?i=${encodeURIComponent(movie.imdb)}&apikey=${OMDB_API_KEY}&h=600`;
    img.onload = () => {
        if (current !== movie || img.naturalWidth < 20) return;
        img.className = "movie-poster";
        img.alt = "";
        posterEl.replaceChildren(img);
    };
    img.src = url;
}

function fillTags(movie) {
    tagsEl.replaceChildren();
    const cat = document.createElement("span");
    cat.textContent = label(movie.category);
    tagsEl.append(cat);
    if (movie.wildcard) {
        const wild = document.createElement("span");
        wild.className = "wildcard-tag";
        wild.textContent = "Wildcard";
        tagsEl.append(wild);
    }
}

function imdbUrl(movie) {
    return movie.imdb ? `https://www.imdb.com/title/${movie.imdb}/` : "";
}

function trailerUrl(movie) {
    const query = [movie.title, movie.year, "official trailer"].filter(Boolean).join(" ");
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

const WATCH_LABELS = {
    "Amazon Prime Video": "Prime Video",
    "Disney Plus": "Disney+",
    "Apple TV Plus": "Apple TV+",
    "Apple TV": "Apple TV",
    "Paramount Plus": "Paramount+",
    "Paramount+": "Paramount+"
};

function watchOffers(movie) {
    const rows = watchById[movie.imdb] || [];
    return rows.filter((row) => row && row.name && row.url).slice(0, 6);
}

function copyText(movie) {
    return imdbUrl(movie);
}

async function copyPick(movie, button) {
    const text = copyText(movie);
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.append(area);
        area.select();
        document.execCommand("copy");
        area.remove();
    }
    const previous = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
        if (button.isConnected) button.textContent = previous;
    }, 1200);
}

function externalLink(href, label, className) {
    const link = document.createElement("a");
    link.className = className;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = label;
    return link;
}

function rentOffers(movie) {
    const query = encodeURIComponent([movie.title, movie.year].filter(Boolean).join(" "));
    return [
        { name: "Google", url: `https://tv.google.com/search?q=${query}&hl=en` },
        { name: "Prime Video", url: `https://www.amazon.com/s?k=${query}&i=instant-video` },
        { name: "Apple TV", url: `https://tv.apple.com/us/search?term=${query}` }
    ];
}

function watchRow(labelText, offers) {
    const row = document.createElement("div");
    row.className = "watch-row";
    const label = document.createElement("span");
    label.className = "watch-label";
    label.textContent = labelText;
    row.append(label);
    offers.forEach((offer) => {
        const link = document.createElement("a");
        link.href = offer.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = WATCH_LABELS[offer.name] || offer.name;
        row.append(link);
    });
    return row;
}

function renderWatch(movie) {
    watchEl.replaceChildren();
    const offers = watchOffers(movie);
    const rents = rentOffers(movie);
    if (!offers.length && !rents.length) {
        watchEl.hidden = true;
        return;
    }
    watchEl.hidden = false;
    if (offers.length) watchEl.append(watchRow("Watch now", offers));
    if (rents.length) watchEl.append(watchRow("Rent", rents));
}

function renderActions(movie) {
    actionsEl.replaceChildren();
    const imdb = imdbUrl(movie);
    if (imdb) actionsEl.append(externalLink(imdb, "View on IMDb", "imdb-btn"));
    if (movie.title) actionsEl.append(externalLink(trailerUrl(movie), "Trailer", "ghost-btn"));
    if (!imdb) return;
    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "ghost-btn";
    copyBtn.textContent = "Copy";
    copyBtn.addEventListener("click", () => copyPick(movie, copyBtn));
    actionsEl.append(copyBtn);
}

function show(movie, nextMode, announce) {
    current = movie;
    mode = nextMode;
    resultEl.classList.add("show");
    pickLabel.textContent = nextMode === "daily" ? "Tonight's pick" : "Your spin";
    pickLabel.classList.toggle("daily", nextMode === "daily");
    titleEl.textContent = movie.title;
    const bits = [movie.year, label(movie.type)].filter(Boolean);
    metaEl.textContent = bits.join(" · ");
    descriptionEl.textContent = movie.description || "";
    fillTags(movie);
    renderWatch(movie);
    renderActions(movie);
    setPoster(movie);
    tonightBtn.hidden = nextMode !== "spin";
    if (announce) {
        liveStatus.textContent = `${movie.title}, ${movie.year}. ${movie.description || ""}`;
    }
}

function pushHistory(movie) {
    const key = keyOf(movie);
    history = [movie, ...history.filter((item) => keyOf(item) !== key)].slice(0, 8);
    writeList(HISTORY_KEY, history);
    renderHistory();
}

function renderHistory() {
    historyList.replaceChildren();
    historySection.hidden = history.length === 0;
    history.forEach((movie) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "history-chip";
        chip.textContent = movie.title;
        chip.addEventListener("click", () => show(movie, "spin", true));
        historyList.append(chip);
    });
}

async function spin() {
    if (!loaded || spinning) return;
    const list = pool();
    setCount(list);
    if (!list.length) return;
    spinning = true;
    spinBtn.disabled = true;
    const next = pickRandom(list);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && list.length > 1) {
        const flashes = Math.min(8, list.length);
        for (let i = 0; i < flashes; i += 1) {
            titleEl.textContent = list[hash(`${Date.now()}|${i}|${next.title}`) % list.length].title;
            resultEl.classList.add("show");
            await wait(45 + i * 12);
        }
    }
    show(next, "spin", true);
    pushHistory(next);
    spinning = false;
    setCount(pool());
}

function showDaily() {
    const list = pool();
    setCount(list);
    if (!list.length) {
        resultEl.classList.remove("show");
        liveStatus.textContent = "Nothing matches these filters.";
        return;
    }
    show(dailyFrom(list), "daily", true);
}

function refreshAfterFilter() {
    const list = pool();
    setCount(list);
    if (!list.length) {
        current = null;
        resultEl.classList.remove("show");
        liveStatus.textContent = emptyCopy();
        return;
    }
    const stillIn = current && list.some((movie) => keyOf(movie) === keyOf(current));
    if (!stillIn) {
        if (mode === "spin") show(pickRandom(list), "spin", true);
        else showDaily();
        return;
    }
    if (mode === "daily") showDaily();
}

function clearFilters() {
    filters.type = "all";
    filters.category = "all";
    filters.wildcard = false;
    filters.year = "";
    document.getElementById("wildcard").checked = false;
    document.getElementById("yearFilter").value = "";
    document.querySelectorAll(".filter-btn").forEach((btn) => {
        const on = btn.dataset.type === "all" || btn.dataset.category === "all";
        btn.classList.toggle("active", on);
    });
    refreshAfterFilter();
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const group = btn.parentElement;
        group.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
        btn.classList.add("active");
        if (btn.dataset.type) filters.type = btn.dataset.type;
        if (btn.dataset.category) filters.category = btn.dataset.category;
        refreshAfterFilter();
    });
});

document.getElementById("wildcard").addEventListener("change", (event) => {
    filters.wildcard = event.target.checked;
    refreshAfterFilter();
});

document.getElementById("yearFilter").addEventListener("change", (event) => {
    filters.year = event.target.value;
    refreshAfterFilter();
});

clearFiltersBtn.addEventListener("click", clearFilters);
spinBtn.addEventListener("click", spin);
tonightBtn.addEventListener("click", showDaily);

document.addEventListener("keydown", (event) => {
    if (event.repeat) return;
    if (event.target.closest("input, select, textarea, button, a")) return;
    if (event.code !== "Space" && event.code !== "Enter") return;
    event.preventDefault();
    spin();
});

async function loadWatch() {
    try {
        const response = await fetch(`data/watch.json?v=${DATA_VERSION}`, { cache: "no-store" });
        if (!response.ok) return {};
        const data = await response.json();
        return data && typeof data === "object" ? data : {};
    } catch {
        return {};
    }
}

async function loadMovies() {
    const sources = [
        `data/movies.json?v=${DATA_VERSION}`,
        "https://raw.githubusercontent.com/k2sobot/movie-roulette/main/data/movies.json"
    ];
    for (const url of sources) {
        try {
            const response = await fetch(url, { cache: "no-store" });
            if (!response.ok) continue;
            const data = await response.json();
            if (Array.isArray(data.movies) && data.movies.length) return data.movies;
        } catch {
            /* try the next source */
        }
    }
    return [];
}

async function init() {
    renderHistory();
    [movies, watchById] = await Promise.all([loadMovies(), loadWatch()]);
    loaded = true;
    if (!movies.length) {
        poolCount.textContent = "Couldn't load the list. Refresh and try again.";
        catalogEl.textContent = "";
        return;
    }
    catalogEl.textContent = `${movies.length.toLocaleString()} titles`;
    showDaily();
}

init();
