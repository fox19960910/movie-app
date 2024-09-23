import { useParams } from 'react-router-dom'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import PerformerList from '@components/MediaDetail/PerformerList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import MovieInfomation from '@components/MediaDetail/MovieInfomation'
import useFetch from '@hooks/useFetch'
import { useMemo } from 'react'
import { groupBy } from 'lodash'

function MovieDetail() {
    const { id } = useParams()
    const { data: movieDetail, isloading: isLoadingMovie } = useFetch({
        url: `/movie/${id}?append_to_response=release_dates,credits`,
    })
    const { data: recomendationsRes, isloading: isLoadingRecomendations } =
        useFetch({ url: `/movie/${id}/recommendations` })
    const recomendations = (recomendationsRes?.results || []).slice(0, 12)
    const certification = useMemo(() => {
        return (
            (movieDetail?.release_dates?.results || []).find(
                (result) => result.iso_3166_1 === 'US'
            )?.release_dates || []
        ).find((releaseDatea) => releaseDatea.certification)?.certification
    }, [movieDetail])
    const groupedCrews = useMemo(() => {
        const crews = (movieDetail?.credits?.crew || [])
            .filter((crew) =>
                ['Director', 'Screenplay', 'Writer'].includes(crew.job)
            )
            .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }))
        return groupBy(crews, 'job')
    }, [movieDetail])

    if (isLoadingMovie) return <Loading />
    return (
        <div className="bg-black text-[1.2vw] text-white">
            <Banner
                title={movieDetail.title}
                backdropPath={movieDetail.backdrop_path}
                posterPath={movieDetail.poster_path}
                releaseDate={movieDetail.release_dates}
                certification={certification}
                groupedCrews={groupedCrews}
                voteAverage={movieDetail.vote_averages}
                genres={movieDetail.genres}
            />
            <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                <div className="flex-[2]">
                    <PerformerList
                        performers={movieDetail?.credits?.cast || []}
                    />
                    <RelatedMediaList
                        mediaList={recomendations}
                        isLoading={isLoadingRecomendations}
                    />
                </div>
                <div className="flex-1">
                    <MovieInfomation movieInfo={movieDetail} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
