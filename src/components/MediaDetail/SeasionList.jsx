import CircularProgressBar from '@components/CircularProgressBar'
import ImageCpn from '@components/Image'
import { useState } from 'react'

const SeasionList = ({ seasons = [] }) => {
    const [isShowMore, setIsShowMore] = useState(false)
    const currentSeasons = isShowMore ? seasons : seasons.slice(0, 3)
    return (
        <div className="mt-8 text-[1.3vw]">
            <div className="space-y-4">
                <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
                {currentSeasons.map((season) => (
                    <div
                        key={season.id}
                        className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
                    >
                        <ImageCpn
                            src={
                                season.poster_path &&
                                `https://media.themoviedb.org/t/p/w300${season.poster_path}`
                            }
                            alt=""
                            width={130}
                            height={195}
                            className="w-1/4 rounded-lg"
                        />
                        <div className="space-y-1">
                            <p className="text-[1.4vw] font-bold">
                                {season.name}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="font-bold">Rating</p>
                                <CircularProgressBar
                                    percent={Math.floor(
                                        season.vote_average || 0
                                    )}
                                    size={2.5}
                                    strokeWidth={0.2}
                                />
                            </div>
                            <p>
                                <span className="font-bold">Release Date:</span>{' '}
                                {season.air_date}
                            </p>
                            <p>
                                {season.episode_count}{' '}
                                {season.episode_count > 1
                                    ? 'Episodes'
                                    : 'Episode'}
                            </p>
                            <p>{season.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p
                    className="mt-1 cursor-pointer"
                    onClick={() => setIsShowMore((prev) => !prev)}
                >
                    {isShowMore ? 'Show less' : ' Show more'}
                </p>
            </div>
        </div>
    )
}

export default SeasionList
