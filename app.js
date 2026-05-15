const OMDB_API_KEY = '8accb253';
let movies = [];
let currentFilters = {
    type: 'all',
    category: 'all',
    wildcard: false,
    yearMin: null
};

// Load movies from JSON
async function loadMovies() {
    try {
        const response = await fetch("data/movies.json?v=2")');
        const data = await response.json();
        movies = data.movies;
    } catch (e) {
        console.error('Failed to load movies:', e);
        movies = [];
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

document.getElementById('yearFilter').addEventListener('change', (e) => {
    currentFilters.yearMin = e.target.value ? parseInt(e.target.value) : null;
});

// Spin function
document.getElementById('spinBtn').addEventListener('click', () => {
    const btn = document.getElementById('spinBtn');
    btn.classList.add('spinning');
    btn.disabled = true;
    
    setTimeout(() => {
        const result = pickRandom();
        displayResult(result);
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
    
    if (currentFilters.yearMin) {
        pool = pool.filter(m => m.year >= currentFilters.yearMin);
    }
    
    if (pool.length === 0) {
        return { title: "No matches found", year: "", description: "Try different filters", imdb: null, type: "", category: "", wildcard: false };
    }
    
    return pool[Math.floor(Math.random() * pool.length)];
}

function displayResult(movie) {
    const result = document.getElementById('result');
    
    // Show loading state
    const posterEl = document.getElementById('poster');
    posterEl.innerHTML = '<div class="poster-loading">🎬</div>';
    
    document.getElementById('title').textContent = movie.title;
    document.getElementById('meta').textContent = movie.year ? `${movie.year} • ${movie.type.charAt(0).toUpperCase() + movie.type.slice(1)}` : '';
    document.getElementById('description').textContent = movie.description;
    
    // Show category and wildcard badge
    const tags = document.getElementById('tags');
    if (movie.wildcard) {
        tags.innerHTML = `<span>${movie.category}</span><span class="wildcard-tag">🎲 Wildcard</span>`;
    } else {
        tags.innerHTML = `<span>${movie.category}</span>`;
    }
    
    // Add IMDb link button
    const linkEl = document.getElementById('imdb-link');
    if (movie.imdb) {
        linkEl.innerHTML = `<a href="https://www.imdb.com/title/${movie.imdb}/" target="_blank" rel="noopener" class="imdb-btn">View on IMDb →</a>`;
        linkEl.style.display = 'block';
    } else {
        linkEl.innerHTML = '';
        linkEl.style.display = 'none';
    }
    
    result.classList.add('show');
    
    // Fetch poster
    if (movie.imdb) {
        const posterUrl = `https://img.omdbapi.com/?i=${movie.imdb}&apikey=${OMDB_API_KEY}&h=600`;
        const img = new Image();
        img.onload = () => {
            posterEl.innerHTML = `<img src="${posterUrl}" alt="${movie.title}" class="movie-poster">`;
        };
        img.onerror = () => {
            posterEl.innerHTML = '<div class="poster-placeholder">🎬</div>';
        };
        img.src = posterUrl;
    } else {
        posterEl.innerHTML = '<div class="poster-placeholder">🎬</div>';
    }
}

// Initialize
window.addEventListener('load', async () => {
    await loadMovies();
    setTimeout(() => {
        document.getElementById('spinBtn').click();
    }, 500);
});
