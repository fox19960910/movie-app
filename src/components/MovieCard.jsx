import { Link } from 'react-router-dom'
import CircularProgressBar from './CircularProgressBar'
import ImageCpn from './Image'

const MovieCard = (props) => {
    const { id, title, release_date, backdrop_path, vote_average, media_type } =
        props
    console.log('media_type', media_type)

    const movieURL = `/${media_type}/${id}`
    return (
        <Link to={movieURL} className="rounded-lg border border-slate-800">
            {' '}
            <div className="relative">
                {media_type === 'tv' && (
                    <p className="shadow-xs text-md py absolute right-1 top-1 rounded-md bg-slate-900 px-2 text-sm font-bold">
                        TV Show
                    </p>
                )}
                <ImageCpn
                    className="w-full rounded-lg"
                    src={
                        backdrop_path &&
                        `https://media.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`
                    }
                    width={220}
                    height={330}
                />
                <div className="relative -top-[1.5vw] px-4">
                    <CircularProgressBar percent={Math.round(vote_average)} />
                    <p className="font-bold">{title ?? ''}</p>
                    <p className="text-stone-300">{release_date}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
