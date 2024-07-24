import MovieCard from './MovieCard'

const MediaList = () => {
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
                <MovieCard />
            </div>
        </div>
    )
}

export default MediaList