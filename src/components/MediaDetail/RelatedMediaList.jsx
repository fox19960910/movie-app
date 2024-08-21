import MovieCard from '@components/MovieCard'

const RelatedMediaList = ({ mediaList = [] }) => {
    return (
        <div>
            <h3 className="mb-4 text-[1.4vw] font-bold">More like this</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
                {mediaList.length > 0 &&
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

export default RelatedMediaList
