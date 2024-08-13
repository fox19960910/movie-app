import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MediaList = ({ title, tabs }) => {
    const [mediaList, setMediaList] = useState([])
    const [activeTab, setActiveTab] = useState(tabs[0].value)
    useEffect(() => {
        const url = tabs.find((tab) => tab.value === activeTab)?.url
        if (!url) return
        fetch(url, {
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
    }, [activeTab])

    return (
        <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
            <div className="mb-6 flex items-center gap-4">
                <p className="text-[2vw] font-bold">{title}</p>

                <ul className="flex rounded border border-white">
                    {tabs.map((item) => {
                        const active =
                            item.value === activeTab
                                ? 'bg-white text-black'
                                : ''
                        return (
                            <li
                                key={item.value}
                                className={`cursor rounded px-2 py-1 ${active}`}
                                onClick={() => setActiveTab(item.value)}
                            >
                                {item.label}{' '}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
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
                            media_type={media?.media_type}
                        />
                    ))}
            </div>
        </div>
    )
}

export default MediaList
