import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgressBar from '../components/CircularProgressBar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetail() {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    useEffect(() => {
        if (!id) return
        fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzQxYjQ3OGE4ZjNhYjMxZWZkMzQyMDM0MDc2NTU1ZSIsIm5iZiI6MTcyMTcyNzM4OC4xNDYxMywic3ViIjoiNjExOTRhOWUxYmY4NzYwMDJmOGRhOTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EvgdWv2wuamW1i8JKBBd4ySaIJF76FUUgdYoVdwP0pk',
            },
        })
            .then(async (res) => {
                const response = await res.json()
                setMovieDetail(response)
                console.log('response', response)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div className="relative overflow-hidden text-white">
            <img
                className="absolute inset-0 brightness-[.2]"
                src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
                alt=""
            />
            <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
                <div className="flex-1">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`}
                        alt=""
                    />
                </div>

                <div className="flex-[2] text-[1.2vw]">
                    <p className="mb-2 text-[2vw] font-bold">
                        {movieDetail?.original_title}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="border border-gray-400 p-1 text-gray-400">
                            G
                        </span>
                        <p>{movieDetail?.release_date}</p>
                        <p>
                            {movieDetail?.genres
                                .map((item) => item?.name)
                                .join(', ')}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <CircularProgressBar
                                percent={movieDetail.vote_average}
                                size={3.5}
                            />{' '}
                            Rating
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faPlay} className="mr-1" />
                            Trailer
                        </button>
                    </div>
                    <div className="mt-6">
                        <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
                        <p>
                            While scavenging the deep ends of a derelict space
                            station, a group of young space colonizers come face
                            to face with the most terrifying life form in the
                            universe
                        </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <div>
                            <p className="font-bold">tr</p>
                            <p>tr</p>
                        </div>
                        <div>
                            <p className="font-bold">tr</p>
                            <p>tr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
