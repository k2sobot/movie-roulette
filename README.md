# 🎬 Movie Roulette

Can't decide what to watch? Let fate choose for you.

## Features

- **Random Selection**: Spin for a random movie or TV show
- **Filters**: Choose between movies or series
- **Categories**: Action, Comedy, Drama, Horror, Sci-Fi, Thriller
- **Wildcard Mode**: Discover hidden gems and underrated picks

## How to Use

1. Select your preferences (type, category, wildcard mode)
2. Hit the **SPIN** button
3. Get your pick for movie night

## Adding More Content

Edit `app.js` and add entries to the `movies` array:

```javascript
{ 
    title: "Title Here", 
    year: 2024, 
    type: "movie", // or "series"
    category: "action", // action, comedy, drama, horror, scifi, thriller
    description: "Brief description",
    poster: "🎬", // emoji placeholder
    wildcard: false // set true for hidden gems
}
```

## Deployment

Hosted on GitHub Pages. Just push to main branch.

---

Made with 🎲 and movie love.

