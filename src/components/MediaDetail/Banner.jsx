import { faPlay } from '@fortawesome/free-solid-svg-icons'
import CircularProgressBar from '../CircularProgressBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageCpn from '@components/Image'
import { useModalContext } from '@components/context/ModalProvider'
const Banner = ({
    title,
    backdropPath,
    posterPath,
    certification,
    groupedCrews,
    genres,
    voteAverage,
    overview,
    releaseDate,
    trailerVideoKey,
}) => {
    const { openPopup } = useModalContext()
    const handleClickTrailer = () => {
        openPopup(
            <iframe
                title="Trailer"
                className="aspect-video w-[50vw]"
                src={`http://youtube.com/embed/${trailerVideoKey}`}
            />
        )
    }
    return (
        <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-900">
            <img
                className="absolute inset-0 brightness-[.2]"
                src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
                alt=""
            />
            <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 pb-8 pt-20 lg:gap-8">
                <div className="flex-1">
                    <ImageCpn
                        src={
                            posterPath &&
                            `https://image.tmdb.org/t/p/original/${posterPath}`
                        }
                        alt=""
                        width={600}
                        height={900}
                    />
                </div>

                <div className="flex-[2] text-[1.2vw]">
                    <p className="mb-2 text-[2vw] font-bold">{title}</p>
                    <div className="flex items-center gap-4">
                        <span className="border border-gray-400 p-1 text-gray-400">
                            {certification}
                        </span>
                        <p>{releaseDate}</p>
                        <p>
                            {(genres || [])
                                .map((item) => item?.name)
                                .join(', ')}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <CircularProgressBar
                                percent={Math.floor(voteAverage || 0)}
                                size={3.5}
                            />{' '}
                            Rating
                        </div>
                        <button onClick={handleClickTrailer}>
                            <FontAwesomeIcon icon={faPlay} className="mr-1" />
                            Trailer
                        </button>
                    </div>
                    <div className="mt-6">
                        <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
                        <p>{overview}</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {Object.keys(groupedCrews ?? {}).map((job) => (
                            <div key={job}>
                                <p className="font-bold">{job}</p>
                                <p>
                                    {(groupedCrews[job] || [])
                                        .map((crew) => crew.name)
                                        .slice(0, 6)
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
