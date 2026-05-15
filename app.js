const movies = [
    // ACTION MOVIES
    { title: "Mad Max: Fury Road", year: 2015, type: "movie", category: "action", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland.", imdb: "tt1392190", wildcard: false },
    { title: "John Wick", year: 2014, type: "movie", category: "action", description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.", imdb: "tt2911666", wildcard: false },
    { title: "The Raid", year: 2011, type: "movie", category: "action", description: "A SWAT team becomes trapped in a tenement run by a ruthless mobster.", imdb: "tt1899353", wildcard: true },
    { title: "Dredd", year: 2012, type: "movie", category: "action", description: "Judge Dredd and a cadet fight through a tower block controlled by a drug lord.", imdb: "tt1343727", wildcard: true },
    { title: "Die Hard", year: 1988, type: "movie", category: "action", description: "An NYPD officer tries to save his wife and others taken hostage by terrorists.", imdb: "tt0095016", wildcard: false },
    { title: "The Matrix", year: 1999, type: "movie", category: "action", description: "A hacker discovers the world is a simulated reality created by machines.", imdb: "tt0133093", wildcard: false },
    { title: "Terminator 2", year: 1991, type: "movie", category: "action", description: "A cyborg is sent to protect a boy from a more advanced terminator.", imdb: "tt0103064", wildcard: false },
    { title: "Aliens", year: 1986, type: "movie", category: "action", description: "Ellen Ripley returns to the planet where her crew encountered aliens.", imdb: "tt0090605", wildcard: false },
    { title: "The Bourne Identity", year: 2002, type: "movie", category: "action", description: "A man with amnesia discovers he's a CIA assassin.", imdb: "tt0258463", wildcard: false },
    { title: "Mission: Impossible - Fallout", year: 2018, type: "movie", category: "action", description: "Ethan Hunt races against time after a mission goes wrong.", imdb: "tt4912910", wildcard: false },
    { title: "Oldboy", year: 2003, type: "movie", category: "action", description: "A man seeks revenge after being imprisoned for 15 years.", imdb: "tt0364569", wildcard: true },
    { title: "The Man from Nowhere", year: 2010, type: "movie", category: "action", description: "A mysterious pawnshop owner saves a girl from a drug cartel.", imdb: "tt1527788", wildcard: true },
    
    // COMEDY
    { title: "Superbad", year: 2007, type: "movie", category: "comedy", description: "Two co-dependent high school seniors are forced to deal with separation anxiety.", imdb: "tt0468569", wildcard: false },
    { title: "Hot Fuzz", year: 2007, type: "movie", category: "comedy", description: "A skilled London cop is transferred to a small village with a dark secret.", imdb: "tt0425112", wildcard: false },
    { title: "What We Do in the Shadows", year: 2014, type: "movie", category: "comedy", description: "Vampire roommates try to get by in modern Wellington.", imdb: "tt3416742", wildcard: true },
    { title: "In Bruges", year: 2008, type: "movie", category: "comedy", description: "Two hitmen hide out in Bruges, Belgium.", imdb: "tt0780548", wildcard: true },
    { title: "The Big Lebowski", year: 1998, type: "movie", category: "comedy", description: "The Dude gets caught up in a kidnapping plot.", imdb: "tt0118715", wildcard: false },
    { title: "Monty Python and the Holy Grail", year: 1975, type: "movie", category: "comedy", description: "King Arthur and his knights search for the Holy Grail.", imdb: "tt0071853", wildcard: false },
    { title: "Anchorman", year: 2004, type: "movie", category: "comedy", description: "A 1970s news anchor faces competition from a female reporter.", imdb: "tt0357413", wildcard: false },
    { title: "Step Brothers", year: 2008, type: "movie", category: "comedy", description: "Two grown men become stepbrothers and rivals.", imdb: "tt0838283", wildcard: false },
    { title: "Shaun of the Dead", year: 2004, type: "movie", category: "comedy", description: "A man tries to save his loved ones from a zombie apocalypse.", imdb: "tt0365748", wildcard: false },
    { title: "The Grand Budapest Hotel", year: 2014, type: "movie", category: "comedy", description: "A concierge and his lobby boy become embroiled in theft and murder.", imdb: "tt2278388", wildcard: false },
    { title: "Hunt for the Wilderpeople", year: 2016, type: "movie", category: "comedy", description: "A rebellious boy and his foster uncle go bush in New Zealand.", imdb: "tt4056574", wildcard: true },
    { title: "Four Lions", year: 2010, type: "movie", category: "comedy", description: "Four incompetent jihadists plan a terror attack.", imdb: "tt1341167", wildcard: true },
    
    // DRAMA
    { title: "The Shawshank Redemption", year: 1994, type: "movie", category: "drama", description: "Two imprisoned men bond over years, finding solace and eventual redemption.", imdb: "tt0111161", wildcard: false },
    { title: "Parasite", year: 2019, type: "movie", category: "drama", description: "A poor family schemes to become employed by a wealthy household.", imdb: "tt6751668", wildcard: false },
    { title: "Whiplash", year: 2014, type: "movie", category: "drama", description: "A promising young drummer enrolls at a cut-throat music conservatory.", imdb: "tt2582802", wildcard: false },
    { title: "The Hunt", year: 2012, type: "movie", category: "drama", description: "A teacher's life is turned upside down by a lie.", imdb: "tt2106476", wildcard: true },
    { title: "The Godfather", year: 1972, type: "movie", category: "drama", description: "The aging patriarch transfers control to his son.", imdb: "tt0068646", wildcard: false },
    { title: "Pulp Fiction", year: 1994, type: "movie", category: "drama", description: "Interweaving stories of crime in Los Angeles.", imdb: "tt0110912", wildcard: false },
    { title: "Forrest Gump", year: 1994, type: "movie", category: "drama", description: "A simple man's journey through decades of American history.", imdb: "tt0109830", wildcard: false },
    { title: "Fight Club", year: 1999, type: "movie", category: "drama", description: "An insomniac forms a fight club with a soap salesman.", imdb: "tt0137523", wildcard: false },
    { title: "Goodfellas", year: 1990, type: "movie", category: "drama", description: "The rise and fall of a mob associate.", imdb: "tt0099685", wildcard: false },
    { title: "There Will Be Blood", year: 2007, type: "movie", category: "drama", description: "A ruthless oilman pursues wealth during the oil boom.", imdb: "tt0469494", wildcard: false },
    { title: "No Country for Old Men", year: 2007, type: "movie", category: "drama", description: "A hunter finds dead bodies and drug money.", imdb: "tt0477348", wildcard: false },
    { title: "The Lives of Others", year: 2006, type: "movie", category: "drama", description: "A Stasi officer becomes obsessed with a playwright.", imdb: "tt0405094", wildcard: true },
    { title: "Incendies", year: 2010, type: "movie", category: "drama", description: "Twins journey to the Middle East to uncover their mother's past.", imdb: "tt1255953", wildcard: true },
    
    // HORROR
    { title: "Hereditary", year: 2018, type: "movie", category: "horror", description: "A family is haunted after the death of their secretive grandmother.", imdb: "tt7784602", wildcard: false },
    { title: "Get Out", year: 2017, type: "movie", category: "horror", description: "A young African-American visits his white girlfriend's parents.", imdb: "tt5024348", wildcard: false },
    { title: "The Witch", year: 2015, type: "movie", category: "horror", description: "A family in 1630s New England is torn apart by witchcraft.", imdb: "tt4263482", wildcard: true },
    { title: "Midsommar", year: 2019, type: "movie", category: "horror", description: "A couple travels to a midsummer festival in Sweden.", imdb: "tt8772262", wildcard: true },
    { title: "The Shining", year: 1980, type: "movie", category: "horror", description: "A family man becomes possessed in an isolated hotel.", imdb: "tt0081505", wildcard: false },
    { title: "The Exorcist", year: 1973, type: "movie", category: "horror", description: "A mother seeks help when her daughter is possessed.", imdb: "tt0070047", wildcard: false },
    { title: "Alien", year: 1979, type: "movie", category: "horror", description: "Crew members are hunted by a creature on their ship.", imdb: "tt0078748", wildcard: false },
    { title: "The Thing", year: 1982, type: "movie", category: "horror", description: "Researchers in Antarctica face a shape-shifting alien.", imdb: "tt0084787", wildcard: false },
    { title: "A Quiet Place", year: 2018, type: "movie", category: "horror", description: "A family must stay silent to survive creatures that hunt by sound.", imdb: "tt6644200", wildcard: false },
    { title: "The Conjuring", year: 2013, type: "movie", category: "horror", description: "Paranormal investigators help a family terrorized by a presence.", imdb: "tt1457767", wildcard: false },
    { title: "It Follows", year: 2014, type: "movie", category: "horror", description: "A young woman is pursued by a supernatural entity.", imdb: "tt3235450", wildcard: false },
    { title: "The Babadook", year: 2014, type: "movie", category: "horror", description: "A single mother and her son are terrorized by a monster.", imdb: "tt2321549", wildcard: false },
    { title: "Us", year: 2019, type: "movie", category: "horror", description: "A family is attacked by their doppelgängers.", imdb: "tt6857112", wildcard: false },
    { title: "Suspiria", year: 1977, type: "movie", category: "horror", description: "A ballet student discovers her academy is run by witches.", imdb: "tt0076786", wildcard: false },
    { title: "Let the Right One In", year: 2008, type: "movie", category: "horror", description: "A bullied boy befriends a young vampire.", imdb: "tt1139797", wildcard: true },
    { title: "The Descent", year: 2005, type: "movie", category: "horror", description: "Cave explorers are trapped and hunted by creatures.", imdb: "tt0435625", wildcard: true },
    { title: "The Others", year: 2001, type: "movie", category: "horror", description: "A woman believes her house is haunted.", imdb: "tt0230600", wildcard: false },
    { title: "Ring", year: 1998, type: "movie", category: "horror", description: "A journalist investigates a cursed videotape.", imdb: "tt0178868", wildcard: false },
    
    // SCI-FI
    { title: "Blade Runner 2049", year: 2017, type: "movie", category: "scifi", description: "A young blade runner discovers a secret that could plunge society into chaos.", imdb: "tt1856101", wildcard: false },
    { title: "Arrival", year: 2016, type: "movie", category: "scifi", description: "A linguist works with the military to communicate with aliens.", imdb: "tt2543164", wildcard: false },
    { title: "Ex Machina", year: 2014, type: "movie", category: "scifi", description: "A programmer tests an intelligent humanoid robot.", imdb: "tt0470752", wildcard: false },
    { title: "Coherence", year: 2013, type: "movie", category: "scifi", description: "Eight friends at a dinner party experience reality-bending events.", imdb: "tt2866720", wildcard: true },
    { title: "Interstellar", year: 2014, type: "movie", category: "scifi", description: "A team travels through a wormhole to save humanity.", imdb: "tt0816692", wildcard: false },
    { title: "Inception", year: 2010, type: "movie", category: "scifi", description: "A thief enters dreams to steal secrets.", imdb: "tt1375666", wildcard: false },
    { title: "2001: A Space Odyssey", year: 1968, type: "movie", category: "scifi", description: "Humanity finds a mysterious artifact on the moon.", imdb: "tt0062622", wildcard: false },
    { title: "The Martian", year: 2015, type: "movie", category: "scifi", description: "An astronaut struggles to survive on Mars.", imdb: "tt3659388", wildcard: false },
    { title: "Edge of Tomorrow", year: 2014, type: "movie", category: "scifi", description: "A soldier relives the same day fighting aliens.", imdb: "tt1631867", wildcard: false },
    { title: "District 9", year: 2009, type: "movie", category: "scifi", description: "Aliens are forced to live in slums in South Africa.", imdb: "tt1136608", wildcard: false },
    { title: "Looper", year: 2012, type: "movie", category: "scifi", description: "A hitman must kill his future self.", imdb: "tt1276104", wildcard: false },
    { title: "Moon", year: 2009, type: "movie", category: "scifi", description: "An astronaut nears the end of his solo lunar mission.", imdb: "tt1182347", wildcard: true },
    { title: "Predestination", year: 2014, type: "movie", category: "scifi", description: "A time agent pursues a criminal.", imdb: "tt2397535", wildcard: true },
    { title: "Timecrimes", year: 2007, type: "movie", category: "scifi", description: "A man accidentally travels back in time.", imdb: "tt0480669", wildcard: true },
    
    // THRILLER
    { title: "Gone Girl", year: 2014, type: "movie", category: "thriller", description: "A man becomes the prime suspect when his wife disappears.", imdb: "tt2267998", wildcard: false },
    { title: "Prisoners", year: 2013, type: "movie", category: "thriller", description: "When his daughter goes missing, a desperate father takes matters into his own hands.", imdb: "tt1392214", wildcard: false },
    { title: "The Invitation", year: 2015, type: "movie", category: "thriller", description: "A man accepts an invitation to a dinner party from his ex-wife.", imdb: "tt2400443", wildcard: true },
    { title: "Blue Ruin", year: 2013, type: "movie", category: "thriller", description: "A drifter returns to his hometown for revenge.", imdb: "tt2359024", wildcard: true },
    { title: "Se7en", year: 1995, type: "movie", category: "thriller", description: "Two detectives hunt a serial killer using the seven deadly sins.", imdb: "tt0114369", wildcard: false },
    { title: "The Silence of the Lambs", year: 1991, type: "movie", category: "thriller", description: "An FBI trainee seeks help from a cannibalistic killer.", imdb: "tt0102926", wildcard: false },
    { title: "Zodiac", year: 2007, type: "movie", category: "thriller", description: "A cartoonist becomes obsessed with the Zodiac killer.", imdb: "tt0443706", wildcard: false },
    { title: "Nightcrawler", year: 2014, type: "movie", category: "thriller", description: "A man films crime scenes for news broadcasts.", imdb: "tt2872718", wildcard: false },
    { title: "Drive", year: 2011, type: "movie", category: "thriller", description: "A stunt driver gets involved with criminals.", imdb: "tt0780504", wildcard: false },
    { title: "The Prestige", year: 2006, type: "movie", category: "thriller", description: "Two magicians engage in a deadly rivalry.", imdb: "tt0482571", wildcard: false },
    { title: "Shutter Island", year: 2010, type: "movie", category: "thriller", description: "A marshal investigates a disappearance at a hospital.", imdb: "tt1130884", wildcard: false },
    { title: "Nocturnal Animals", year: 2016, type: "movie", category: "thriller", description: "A woman receives a violent novel manuscript from her ex.", imdb: "tt4550098", wildcard: false },
    { title: "Green Room", year: 2015, type: "movie", category: "thriller", description: "A punk band witnesses a murder at a neo-Nazi club.", imdb: "tt4062520", wildcard: true },
    { title: "You Were Never Really Here", year: 2017, type: "movie", category: "thriller", description: "A traumatized veteran tracks down missing girls.", imdb: "tt5742374", wildcard: true },
    
    // SERIES - ACTION
    { title: "Breaking Bad", year: 2008, type: "series", category: "action", description: "A chemistry teacher turned methamphetamine manufacturer.", imdb: "tt0903747", wildcard: false },
    { title: "The Boys", year: 2019, type: "series", category: "action", description: "A group of vigilantes fight corrupt superheroes.", imdb: "tt1190634", wildcard: false },
    { title: "Gangs of London", year: 2020, type: "series", category: "action", description: "Power struggles in London's criminal underworld.", imdb: "tt9059660", wildcard: true },
    { title: "Peaky Blinders", year: 2013, type: "series", category: "action", description: "A gangster family in post-WWI Birmingham.", imdb: "tt1383702", wildcard: false },
    { title: "Vikings", year: 2013, type: "series", category: "action", description: "Ragnar Lothbrok's rise from farmer to warrior.", imdb: "tt2306299", wildcard: false },
    { title: "Spartacus", year: 2010, type: "series", category: "action", description: "A slave becomes a gladiator and leads a revolt.", imdb: "tt1442437", wildcard: false },
    
    // SERIES - DRAMA
    { title: "The Sopranos", year: 1999, type: "series", category: "drama", description: "A mob boss tries to balance family life with his criminal empire.", imdb: "tt0141842", wildcard: false },
    { title: "Succession", year: 2018, type: "series", category: "drama", description: "The Roy family fights for control of their media empire.", imdb: "tt7660850", wildcard: false },
    { title: "The Wire", year: 2002, type: "series", category: "drama", description: "The Baltimore drug scene seen through the eyes of dealers and police.", imdb: "tt0306414", wildcard: false },
    { title: "Fleabag", year: 2016, type: "series", category: "drama", description: "A dry-witted woman navigates life and love in London.", imdb: "tt5687612", wildcard: true },
    { title: "Better Call Saul", year: 2015, type: "series", category: "drama", description: "Jimmy McGill's transformation into Saul Goodman.", imdb: "tt3032476", wildcard: false },
    { title: "Mad Men", year: 2007, type: "series", category: "drama", description: "Ad executives in 1960s New York.", imdb: "tt0804503", wildcard: false },
    { title: "The Crown", year: 2016, type: "series", category: "drama", description: "Queen Elizabeth II's reign over the UK.", imdb: "tt4786824", wildcard: false },
    { title: "House of Cards", year: 2013, type: "series", category: "drama", description: "A ruthless politician climbs the ranks in Washington.", imdb: "tt1856010", wildcard: false },
    { title: "Mindhunter", year: 2017, type: "series", category: "drama", description: "FBI agents pioneer criminal profiling.", imdb: "tt5294404", wildcard: false },
    { title: "The Queen's Gambit", year: 2020, type: "series", category: "drama", description: "An orphan becomes a chess prodigy.", imdb: "tt10048342", wildcard: true },
    
    // SERIES - THRILLER
    { title: "True Detective", year: 2014, type: "series", category: "thriller", description: "Two detectives revisit a haunting case from their past.", imdb: "tt2356777", wildcard: false },
    { title: "Utopia", year: 2013, type: "series", category: "thriller", description: "A graphic novel predicts humanity's doom.", imdb: "tt2384811", wildcard: true },
    { title: "Sherlock", year: 2010, type: "series", category: "thriller", description: "Modern adaptation of Sherlock Holmes.", imdb: "tt1475582", wildcard: false },
    { title: "Fargo", year: 2014, type: "series", category: "thriller", description: "Anthology series inspired by the film.", imdb: "tt2802850", wildcard: false },
    { title: "Money Heist", year: 2017, type: "series", category: "thriller", description: "A criminal mastermind plans a heist on the Royal Mint.", imdb: "tt6468322", wildcard: false },
    { title: "Ozark", year: 2017, type: "series", category: "thriller", description: "A family moves money for a drug cartel.", imdb: "tt5071412", wildcard: false },
    { title: "Broadchurch", year: 2013, type: "series", category: "thriller", description: "Detectives investigate a boy's murder in a small town.", imdb: "tt2249363", wildcard: false },
    
    // SERIES - SCI-FI
    { title: "Black Mirror", year: 2011, type: "series", category: "scifi", description: "Anthology series exploring technology's dark side.", imdb: "tt2085059", wildcard: false },
    { title: "Severance", year: 2022, type: "series", category: "scifi", description: "Employees undergo a procedure to surgically divide their memories.", imdb: "tt11280740", wildcard: false },
    { title: "Dark", year: 2017, type: "series", category: "scifi", description: "A missing child exposes a family's secrets across three generations.", imdb: "tt5753856", wildcard: true },
    { title: "Stranger Things", year: 2016, type: "series", category: "scifi", description: "Kids uncover government experiments and monsters.", imdb: "tt4574334", wildcard: false },
    { title: "The Expanse", year: 2015, type: "series", category: "scifi", description: "Humanity colonizes the solar system amid political tension.", imdb: "tt3230854", wildcard: false },
    { title: "Westworld", year: 2016, type: "series", category: "scifi", description: "Guests explore a theme park populated by AI hosts.", imdb: "tt0475784", wildcard: false },
    { title: "Orphan Black", year: 2013, type: "series", category: "scifi", description: "A woman discovers she's one of many clones.", imdb: "tt2234222", wildcard: true },
    
    // SERIES - COMEDY
    { title: "The Office", year: 2005, type: "series", category: "comedy", description: "A mockumentary about a paper company's employees.", imdb: "tt0386676", wildcard: false },
    { title: "Arrested Development", year: 2003, type: "series", category: "comedy", description: "The wealthy Bluth family loses everything.", imdb: "tt0367279", wildcard: false },
    { title: "Barry", year: 2018, type: "series", category: "comedy", description: "A hitman tries to become an actor.", imdb: "tt5378490", wildcard: true },
    { title: "Parks and Recreation", year: 2009, type: "series", category: "comedy", description: "Parks department employees in Indiana.", imdb: "tt1266020", wildcard: false },
    { title: "Brooklyn Nine-Nine", year: 2013, type: "series", category: "comedy", description: "Detectives at a Brooklyn police precinct.", imdb: "tt2467372", wildcard: false },
    { title: "Schitt's Creek", year: 2015, type: "series", category: "comedy", description: "A wealthy family loses everything and moves to a small town.", imdb: "tt3526078", wildcard: false },
    { title: "Community", year: 2009, type: "series", category: "comedy", description: "A study group at a community college.", imdb: "tt1439629", wildcard: false },
    { title: "Ted Lasso", year: 2020, type: "series", category: "comedy", description: "An American football coach leads a UK soccer team.", imdb: "tt10986410", wildcard: true },
    
    // SERIES - HORROR
    { title: "The Haunting of Hill House", year: 2018, type: "series", category: "horror", description: "A family confronts ghosts of their past in a haunted house.", imdb: "tt6763664", wildcard: false },
    { title: "Marianne", year: 2019, type: "series", category: "horror", description: "A horror writer discovers her characters are real.", imdb: "tt9058140", wildcard: true },
    { title: "American Horror Story", year: 2011, type: "series", category: "horror", description: "Anthology series of horror stories.", imdb: "tt1844624", wildcard: false },
    { title: "The Walking Dead", year: 2010, type: "series", category: "horror", description: "Survivors navigate a zombie apocalypse.", imdb: "tt1520211", wildcard: false },
    { title: "Penny Dreadful", year: 2014, type: "series", category: "horror", description: "Classic horror characters in Victorian London.", imdb: "tt2628232", wildcard: false },
    { title: "Haunting of Bly Manor", year: 2020, type: "series", category: "horror", description: "An au pair cares for children at a haunted estate.", imdb: "tt8292742", wildcard: false },
    { title: "Channel Zero", year: 2016, type: "series", category: "horror", description: "Horror anthology based on internet creepypasta.", imdb: "tt5559538", wildcard: true }
];

const OMDB_API_KEY = '8accb253';

let currentFilters = {
    type: 'all',
    category: 'all',
    wildcard: false
};

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

// Auto-spin on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('spinBtn').click();
    }, 500);
});
