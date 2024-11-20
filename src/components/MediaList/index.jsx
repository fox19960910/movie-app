import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import useFetch from '@hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

const MediaList = ({ tabSubject, title, tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value)
    const [tabParams, setTabParams] = useSearchParams()
    const url = tabs.find((tab) => tab.value === activeTab)?.url
    const { data: response } = useFetch({
        url,
    })

    const mediaList = (response?.results || []).slice(0, 12)
    const queryTab = tabParams.get(tabSubject) || ''
    const tabObject = Object.fromEntries(tabParams)
    console.log(mediaList)

    const handleClickTab = (tab) => {
        setActiveTab(tab)
        setTabParams({ ...tabObject, [tabSubject]: tab })
    }
    useEffect(() => {
        if (queryTab) setActiveTab(queryTab)
    }, [queryTab])
    return (
        <div className="bg-black px-10 py-10 text-[1.2vw] text-white">
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
                                onClick={() => handleClickTab(item.value)}
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
                            id={media?.id}
                            title={media?.title || media?.name}
                            release_date={
                                media?.release_date || media?.first_air_date
                            }
                            backdrop_path={media?.poster_path}
                            vote_average={Math.floor(media?.vote_average)}
                            overview={media?.overview}
                            media_type={media?.media_type}
                        />
                    ))}
            </div>
        </div>
    )
}

export default MediaList
