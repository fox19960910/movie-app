import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Banner from '../components/MediaDetail/Banner'
import PerformerList from '../components/MediaDetail/PerformerList'

function MovieDetail() {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (!id) return
        setIsLoading(true)
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
                setIsLoading(false)
            })
    }, [id])

    if (isLoading) return <Loading />
    return (
        <div>
            <Banner mediaInfo={movieDetail} />
            <div className="max-auto flex max-w-screen-xl bg-slate-950 px-6 py-10">
                <div className="flex-[2]">
                    <PerformerList />
                </div>
                <div className="flex-1">
                    <p>Infomation</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
