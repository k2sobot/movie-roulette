const movies = [
    // ACTION MOVIES
    { title: "Mad Max: Fury Road", year: 2015, type: "movie", category: "action", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland.", imdbId: "tt1392190", wildcard: false },
    { title: "John Wick", year: 2014, type: "movie", category: "action", description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.", imdbId: "tt2911666", wildcard: false },
    { title: "The Raid", year: 2011, type: "movie", category: "action", description: "A SWAT team becomes trapped in a tenement run by a ruthless mobster.", imdbId: "tt1899353", wildcard: true },
    { title: "Dredd", year: 2012, type: "movie", category: "action", description: "Judge Dredd and a cadet fight through a tower block controlled by a drug lord.", imdbId: "tt1343727", wildcard: true },
    
    // COMEDY
    { title: "Superbad", year: 2007, type: "movie", category: "comedy", description: "Two co-dependent high school seniors are forced to deal with separation anxiety.", imdbId: "tt0468569", wildcard: false },
    { title: "Hot Fuzz", year: 2007, type: "movie", category: "comedy", description: "A skilled London cop is transferred to a small village with a dark secret.", imdbId: "tt0425112", wildcard: false },
    { title: "What We Do in the Shadows", year: 2014, type: "movie", category: "comedy", description: "Vampire roommates try to get by in modern Wellington.", imdbId: "tt3416742", wildcard: true },
    { title: "In Bruges", year: 2008, type: "movie", category: "comedy", description: "Two hitmen hide out in Bruges, Belgium.", imdbId: "tt0780548", wildcard: true },
    
    // DRAMA
    { title: "The Shawshank Redemption", year: 1994, type: "movie", category: "drama", description: "Two imprisoned men bond over years, finding solace and eventual redemption.", imdbId: "tt0111161", wildcard: false },
    { title: "Parasite", year: 2019, type: "movie", category: "drama", description: "A poor family schemes to become employed by a wealthy household.", imdbId: "tt6751668", wildcard: false },
    { title: "Whiplash", year: 2014, type: "movie", category: "drama", description: "A promising young drummer enrolls at a cut-throat music conservatory.", imdbId: "tt2582802", wildcard: false },
    { title: "The Hunt", year: 2012, type: "movie", category: "drama", description: "A teacher's life is turned upside down by a lie.", imdbId: "tt2106476", wildcard: true },
    
    // HORROR
    { title: "Hereditary", year: 2018, type: "movie", category: "horror", description: "A family is haunted after the death of their secretive grandmother.", imdbId: "tt7784602", wildcard: false },
    { title: "Get Out", year: 2017, type: "movie", category: "horror", description: "A young African-American visits his white girlfriend's parents.", imdbId: "tt5024348", wildcard: false },
    { title: "The Witch", year: 2015, type: "movie", category: "horror", description: "A family in 1630s New England is torn apart by witchcraft.", imdbId: "tt4263482", wildcard: true },
    { title: "Midsommar", year: 2019, type: "movie", category: "horror", description: "A couple travels to a midsummer festival in Sweden.", imdbId: "tt8772262", wildcard: true },
    
    // SCI-FI
    { title: "Blade Runner 2049", year: 2017, type: "movie", category: "scifi", description: "A young blade runner discovers a secret that could plunge society into chaos.", imdbId: "tt1856101", wildcard: false },
    { title: "Arrival", year: 2016, type: "movie", category: "scifi", description: "A linguist works with the military to communicate with aliens.", imdbId: "tt2543164", wildcard: false },
    { title: "Ex Machina", year: 2014, type: "movie", category: "scifi", description: "A programmer tests an intelligent humanoid robot.", imdbId: "tt0470752", wildcard: false },
    { title: "Coherence", year: 2013, type: "movie", category: "scifi", description: "Eight friends at a dinner party experience reality-bending events.", imdbId: "tt2866720", wildcard: true },
    
    // THRILLER
    { title: "Gone Girl", year: 2014, type: "movie", category: "thriller", description: "A man becomes the prime suspect when his wife disappears.", imdbId: "tt2267998", wildcard: false },
    { title: "Prisoners", year: 2013, type: "movie", category: "thriller", description: "When his daughter goes missing, a desperate father takes matters into his own hands.", imdbId: "tt1392214", wildcard: false },
    { title: "The Invitation", year: 2015, type: "movie", category: "thriller", description: "A man accepts an invitation to a dinner party from his ex-wife.", imdbId: "tt2400443", wildcard: true },
    { title: "Blue Ruin", year: 2013, type: "movie", category: "thriller", description: "A drifter returns to his hometown for revenge.", imdbId: "tt2359024", wildcard: true },
    
    // SERIES - ACTION
    { title: "Breaking Bad", year: 2008, type: "series", category: "action", description: "A chemistry teacher turned methamphetamine manufacturer.", imdbId: "tt0903747", wildcard: false },
    { title: "The Boys", year: 2019, type: "series", category: "action", description: "A group of vigilantes fight corrupt superheroes.", imdbId: "tt1190634", wildcard: false },
    { title: "Gangs of London", year: 2020, type: "series", category: "action", description: "Power struggles in London's criminal underworld.", imdbId: "tt9059660", wildcard: true },
    
    // SERIES - DRAMA
    { title: "The Sopranos", year: 1999, type: "series", category: "drama", description: "A mob boss tries to balance family life with his criminal empire.", imdbId: "tt0141842", wildcard: false },
    { title: "Succession", year: 2018, type: "series", category: "drama", description: "The Roy family fights for control of their media empire.", imdbId: "tt7660850", wildcard: false },
    { title: "The Wire", year: 2002, type: "series", category: "drama", description: "The Baltimore drug scene seen through the eyes of dealers and police.", imdbId: "tt0306414", wildcard: false },
    { title: "Fleabag", year: 2016, type: "series", category: "drama", description: "A dry-witted woman navigates life and love in London.", imdbId: "tt5687612", wildcard: true },
    
    // SERIES - THRILLER
    { title: "Mindhunter", year: 2017, type: "series", category: "thriller", description: "FBI agents pioneer the development of modern serial killer profiling.", imdbId: "tt5294404", wildcard: false },
    { title: "True Detective", year: 2014, type: "series", category: "thriller", description: "Two detectives revisit a haunting case from their past.", imdbId: "tt2356777", wildcard: false },
    { title: "Utopia", year: 2013, type: "series", category: "thriller", description: "A graphic novel predicts humanity's doom.", imdbId: "tt2384811", wildcard: true },
    
    // SERIES - SCI-FI
    { title: "Black Mirror", year: 2011, type: "series", category: "scifi", description: "Anthology series exploring technology's dark side.", imdbId: "tt2085059", wildcard: false },
    { title: "Severance", year: 2022, type: "series", category: "scifi", description: "Employees undergo a procedure to surgically divide their memories.", imdbId: "tt11280740", wildcard: false },
    { title: "Dark", year: 2017, type: "series", category: "scifi", description: "A missing child exposes a family's secrets across three generations.", imdbId: "tt5753856", wildcard: true },
    
    // SERIES - COMEDY
    { title: "The Office", year: 2005, type: "series", category: "comedy", description: "A mockumentary about a paper company's employees.", imdbId: "tt0386676", wildcard: false },
    { title: "Arrested Development", year: 2003, type: "series", category: "comedy", description: "The wealthy Bluth family loses everything.", imdbId: "tt0367279", wildcard: false },
    { title: "Barry", year: 2018, type: "series", category: "comedy", description: "A hitman tries to become an actor.", imdbId: "tt5378490", wildcard: true },
    
    // SERIES - HORROR
    { title: "The Haunting of Hill House", year: 2018, type: "series", category: "horror", description: "A family confronts ghosts of their past in a haunted house.", imdbId: "tt6763664", wildcard: false },
    { title: "Marianne", year: 2019, type: "series", category: "horror", description: "A horror writer discovers her characters are real.", imdbId: "tt9058140", wildcard: true }
];

let currentFilters = {
    type: 'all',
    category: 'all',
    wildcard: false
};

// Poster cache
const posterCache = {};

// Fetch poster from OMDb
async function getPoster(imdbId) {
    if (posterCache[imdbId]) return posterCache[imdbId];
    
    try {
        const res = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=2e7e0e64`);
        const data = await res.json();
        const poster = data.Poster && data.Poster !== 'N/A' ? data.Poster : null;
        posterCache[imdbId] = poster;
        return poster;
    } catch (e) {
        return null;
    }
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const group = btn.parentElement;
        group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (btn.dataset.type) currentFilters.type = btn.dataset.type;
        if (btn.dataset.category) currentFilters.category = btn.dataset.category;
    });
});

document.getElementById('wildcard').addEventListener('change', (e) => {
    currentFilters.wildcard = e.target.checked;
});

// Spin function
document.getElementById('spinBtn').addEventListener('click', async () => {
    const btn = document.getElementById('spinBtn');
    btn.classList.add('spinning');
    btn.disabled = true;
    
    setTimeout(async () => {
        const result = pickRandom();
        await displayResult(result);
        btn.classList.remove('spinning');
        btn.disabled = false;
    }, 500);
});

function pickRandom() {
    let pool = movies;
    
    if (currentFilters.type !== 'all') {
        pool = pool.filter(m => m.type === currentFilters.type);
    }
    
    if (currentFilters.category !== 'all') {
        pool = pool.filter(m => m.category === currentFilters.category);
    }
    
    if (currentFilters.wildcard) {
        pool = pool.filter(m => m.wildcard === true);
    }
    
    if (pool.length === 0) {
        return { title: "No matches found", year: "", description: "Try different filters", imdbId: null, type: "" };
    }
    
    return pool[Math.floor(Math.random() * pool.length)];
}

async function displayResult(movie) {
    const result = document.getElementById('result');
    
    // Show loading state
    const posterEl = document.getElementById('poster');
    posterEl.innerHTML = '<div class="poster-loading">🎬</div>';
    
    document.getElementById('title').textContent = movie.title;
    document.getElementById('meta').textContent = movie.year ? `${movie.year} • ${movie.type.charAt(0).toUpperCase() + movie.type.slice(1)}` : '';
    document.getElementById('description').textContent = movie.description;
    
    const tags = document.getElementById('tags');
    tags.innerHTML = `<span>${movie.category}</span>`;
    if (movie.wildcard) {
        tags.innerHTML += '<span class="wildcard-tag">🎲 Wildcard</span>';
    }
    
    result.classList.add('show');
    
    // Fetch and display poster
    if (movie.imdbId) {
        const posterUrl = await getPoster(movie.imdbId);
        if (posterUrl) {
            posterEl.innerHTML = `<img src="${posterUrl}" alt="${movie.title} poster" class="movie-poster">`;
        } else {
            posterEl.innerHTML = '<div class="poster-placeholder">🎬</div>';
        }
    } else {
        posterEl.innerHTML = '<div class="poster-placeholder">🎬</div>';
    }
}

// Auto-spin on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('spinBtn').click();
    }, 500);
});
