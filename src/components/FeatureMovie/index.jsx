import { useEffect, useState } from 'react'
import Movie from './Movie'
import PageginateIndicator from './PageginateIndicator'

const FeatureMovie = () => {
    const [movies, setMovies] = useState([])
    const [activeMovieId, setActiveMovieId] = useState([])
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzQxYjQ3OGE4ZjNhYjMxZWZkMzQyMDM0MDc2NTU1ZSIsIm5iZiI6MTcyMTcyNzM4OC4xNDYxMywic3ViIjoiNjExOTRhOWUxYmY4NzYwMDJmOGRhOTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EvgdWv2wuamW1i8JKBBd4ySaIJF76FUUgdYoVdwP0pk',
                },
            }
        )
            .then(async (res) => {
                const response = await res.json()
                const randomNumber =
                    Math.floor(Math.random() * 18) >= 16
                        ? 16
                        : Math.floor(Math.random() * 18)
                const result = response.results
                    .slice(randomNumber, randomNumber + 4)
                    .map((item, index) => ({ ...item, active: index === 0 }))
                setMovies(result)
                setActiveMovieId(result[0]?.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="relative overflow-hidden">
            {movies && movies.length > 0 && (
                <Movie
                    movie={movies.find((item) => item.id === activeMovieId)}
                />
            )}

            <div className="absolute bottom-[10%] right-4 sm:right-8">
                {movies && movies.length > 0 && (
                    <PageginateIndicator
                        pageList={movies}
                        activeId={activeMovieId}
                        setActiveMovieId={setActiveMovieId}
                    />
                )}
            </div>
        </div>
    )
}

export default FeatureMovie
