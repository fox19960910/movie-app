import { faPlay } from '@fortawesome/free-solid-svg-icons'
import CircularProgressBar from '../CircularProgressBar'
import { groupBy } from 'lodash'
import { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Banner = ({ mediaInfo }) => {
    const certification = useMemo(() => {
        return (
            (mediaInfo.release_dates?.results || []).find(
                (result) => result.iso_3166_1 === 'US'
            )?.release_dates || []
        ).find((releaseDatea) => releaseDatea.certification)?.certification
    }, [mediaInfo])
    const groupedCrews = useMemo(() => {
        const crews = (mediaInfo?.credits?.crew || [])
            .filter((crew) =>
                ['Director', 'Screenplay', 'Writer'].includes(crew.job)
            )
            .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }))
        return groupBy(crews, 'job')
    }, [mediaInfo])
    return (
        <div className="relative overflow-hidden text-white shadow-sm shadow-slate-900">
            <img
                className="absolute inset-0 brightness-[.2]"
                src={`https://image.tmdb.org/t/p/original/${mediaInfo?.backdrop_path}`}
                alt=""
            />
            <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
                <div className="flex-1">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${mediaInfo?.poster_path}`}
                        alt=""
                    />
                </div>

                <div className="flex-[2] text-[1.2vw]">
                    <p className="mb-2 text-[2vw] font-bold">
                        {mediaInfo?.original_title}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="border border-gray-400 p-1 text-gray-400">
                            {certification}
                        </span>
                        <p>{mediaInfo?.release_date}</p>
                        <p>
                            {(mediaInfo?.genres || [])
                                .map((item) => item?.name)
                                .join(', ')}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <CircularProgressBar
                                percent={Math.floor(
                                    mediaInfo.vote_average || 0
                                )}
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
                        <p>{mediaInfo?.overview}</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {Object.keys(groupedCrews).map((job) => (
                            <div key={job}>
                                <p className="font-bold">{job}</p>
                                <p>
                                    {(groupedCrews[job] || [])
                                        .map((crew) => crew.name)
                                        .join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
