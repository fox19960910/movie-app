import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import PerformerList from '@components/MediaDetail/PerformerList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import MovieInfomation from '@components/MediaDetail/MovieInfomation'

function MovieDetail() {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [recomendations, setRecomendations] = useState({})
    const [isLoadingMovie, setIsLoadingMovie] = useState(false)
    const [isLoadingRecomendations, setIsLoadingRecomendations] =
        useState(false)
    useEffect(() => {
        if (!id) return
        setIsLoadingMovie(true)
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
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
                setMovieDetail(response)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoadingMovie(false)
            })
    }, [id])

    useEffect(() => {
        if (!id) return
        setIsLoadingRecomendations(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzQxYjQ3OGE4ZjNhYjMxZWZkMzQyMDM0MDc2NTU1ZSIsIm5iZiI6MTcyMTcyNzM4OC4xNDYxMywic3ViIjoiNjExOTRhOWUxYmY4NzYwMDJmOGRhOTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EvgdWv2wuamW1i8JKBBd4ySaIJF76FUUgdYoVdwP0pk',
            },
        })
            .then(async (res) => {
                const response = await res.json()
                const result = response?.results.slice(0, 12)
                setRecomendations(result)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoadingRecomendations(false)
            })
    }, [id])

    if (isLoadingMovie) return <Loading />
    return (
        <div className="bg-black text-[1.2vw] text-white">
            <Banner mediaInfo={movieDetail} />
            <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                <div className="flex-[2]">
                    <PerformerList
                        performers={movieDetail.credits?.cast || []}
                    />
                    {!isLoadingRecomendations && (
                        <RelatedMediaList mediaList={recomendations} />
                    )}
                </div>
                <div className="flex-1">
                    <MovieInfomation movieInfo={movieDetail} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
