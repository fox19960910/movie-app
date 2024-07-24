import CircularProgressBar from './CircularProgressBar'

const MovieCard = () => {
    return (
        <div className="rounded-lg border border-slate-800">
            <img
                className="rounded-lg"
                src="https://image.tmdb.org/t/p/original//59AJ2w9tKRSbBpnxKfB5UyIg6Jf.jpg"
                alt=""
            />
            <div className="px-4 py-2">
                <CircularProgressBar />
                <p>ádasdad</p>
                <p className="font-bold">ádasdasda</p>
                <p className="text-stone-300">sdasdasda</p>
            </div>
        </div>
    )
}

export default MovieCard
