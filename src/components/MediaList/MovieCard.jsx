import CircularProgressBar from './CircularProgressBar'

const MovieCard = (props) => {
    const { title, release_date, backdrop_path, vote_average } = props
    return (
        <div className="rounded-lg border border-slate-800">
            <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/original${backdrop_path ?? ''}`}
                alt=""
            />
            <div className="relative -top-[1.5vw] px-4">
                <CircularProgressBar percent={Math.round(vote_average)} />
                <p className="font-bold">{title ?? ''}</p>
                <p className="text-stone-300">{release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
