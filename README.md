# Movie Roulette

Can't decide what to watch? Spin the shelf.

Live: https://k2sobot.github.io/movie-roulette/

## What it does

- Spins a movie or series from the local shelf
- Filters for type, category, year, and wildcard picks
- Keeps tonight's pick stable until you spin
- Remembers recent spins in this browser
- Links out to IMDb, the trailer, and where to watch in South Africa

## Run it locally

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Shelf

Titles live in `data/movies.json`, not in `app.js`.

```json
{
  "title": "Title",
  "year": 2024,
  "type": "movie",
  "category": "action",
  "description": "One line.",
  "imdb": "tt0000000",
  "wildcard": false
}
```

`type` is `movie` or `series`. `category` is `action`, `comedy`, `drama`, `horror`, `scifi`, or `thriller`.

## Deploy

GitHub Pages serves the `main` branch.
