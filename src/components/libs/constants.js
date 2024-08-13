export const TRENDING_TABS = [
    {
        label: 'All',
        value: 'all',
        url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    },
    {
        label: 'Movie',
        value: 'movie',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    },
    {
        label: 'TV Show',
        value: 'tv',
        url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    },
]

export const TOP_RATED_TABS = [
    {
        label: 'Movie',
        value: 'movie',
        url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US',
    },
    {
        label: 'TV Show',
        value: 'tv',
        url: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US',
    },
]
