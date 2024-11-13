import { useEffect, useMemo, useState } from 'react'
import Movie from './Movie'
import PageginateIndicator from './PageginateIndicator'
import useFetch from '@hooks/useFetch'

const FeatureMovie = () => {
    const [activeMovieId, setActiveMovieId] = useState()
    const { data: moviesResponse } = useFetch({
        url: `/discover/movie?include_adult=false&include_video=true&language=en-US&page=1`,
    })

    const movies = useMemo(() => {
        const randomNumber =
            Math.floor(Math.random() * 18) >= 16
                ? 16
                : Math.floor(Math.random() * 18)
        return (moviesResponse?.results || [])
            .slice(randomNumber, randomNumber + 4)
            .map((item, index) => ({ ...item, active: index === 0 }))
    }, [JSON.stringify(moviesResponse)])

    useEffect(() => {
        if (movies[0]?.id) setActiveMovieId(movies[0]?.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(movies)])
    return (
        <div className="relative overflow-hidden">
            {movies
                .filter((movie) => movie.id === activeMovieId)
                .map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
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
