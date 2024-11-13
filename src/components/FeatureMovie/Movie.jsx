import { useModalContext } from '@components/context/ModalProvider'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const DEFAULT_HEADER = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}

const Movie = ({ movie }) => {
    const { backdrop_path, title, release_date, overview, id } = movie
    const { openPopup } = useModalContext()
    const navigate = useNavigate()
    const { VITE_API_HOST } = import.meta.env
    const handleClickTrailer = () => {
        if (!id) return
        fetch(`${VITE_API_HOST}/movie/${id}/videos`, {
            method: 'GET',
            headers: DEFAULT_HEADER,
        })
            .then(async (res) => {
                const response = await res.json()
                const trailerVideoKey = response?.results?.find(
                    (video) => video.type === 'Trailer'
                )?.key
                openPopup(
                    <iframe
                        title="Trailer"
                        className="aspect-video w-[50vw]"
                        src={`http://youtube.com/embed/${trailerVideoKey}`}
                    />
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClickDetail = () => {
        const movieURL = `/movie/${id}`
        if (id && movieURL) {
            navigate(movieURL)
        }
    }
    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt=""
                className="w-100 aspect-video w-full brightness-50"
                width={900}
                height={500}
            />
            <div className="absolute bottom-[10%] left-4 w-1/2 text-white sm:left-8 sm:w-1/3">
                <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
                <div>
                    <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
                        PG13
                    </p>
                    <p className="text-[1.2vw]">{release_date}</p>
                </div>
                <div className="mt-4 hidden text-[1.2vw] sm:block">
                    <p className="mb-2 font-bold">Overview</p>
                    <p>{overview}</p>
                </div>

                <div className="mt-4">
                    <button
                        className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg"
                        onClick={handleClickTrailer}
                    >
                        <FontAwesomeIcon icon={faPlay} /> Trailer
                    </button>
                    <button
                        className="rounded bg-slate-300/35 px-4 py-2 text-10 text-white lg:text-lg"
                        onClick={handleClickDetail}
                    >
                        View Detail
                    </button>
                </div>
            </div>
        </>
    )
}

export default Movie
