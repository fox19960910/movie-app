import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MediaList = () => {
    const [mediaList, setMediaList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzQxYjQ3OGE4ZjNhYjMxZWZkMzQyMDM0MDc2NTU1ZSIsIm5iZiI6MTcyMTcyNzM4OC4xNDYxMywic3ViIjoiNjExOTRhOWUxYmY4NzYwMDJmOGRhOTQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.EvgdWv2wuamW1i8JKBBd4ySaIJF76FUUgdYoVdwP0pk',
            },
        })
            .then(async (res) => {
                const response = await res.json()
                const result = response?.results?.slice(0, 12)
                console.log(result)
                setMediaList(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
            <div className="mb-6 flex items-center gap-4">
                <p className="text-[2vw] font-bold">Trending</p>
                <ul className="flex rounded border border-white">
                    <li className="cursor rounded bg-white px-2 py-1 text-black">
                        All
                    </li>
                    <li className="cursor rounded px-2 py-1">Movie</li>
                    <li className="cursor rounded px-2 py-1">TV Show</li>
                </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {mediaList &&
                    mediaList.length > 0 &&
                    mediaList.map((media) => (
                        <MovieCard
                            key={media?.id}
                            title={media?.title || media?.name}
                            release_date={
                                media?.release_date || media?.first_air_date
                            }
                            backdrop_path={media?.poster_path}
                            vote_average={media?.vote_average}
                            overview={media?.overview}
                        />
                    ))}
            </div>
        </div>
    )
}

export default MediaList
