import { useParams } from 'react-router-dom'
import Loading from '@components/Loading'
import Banner from '@components/MediaDetail/Banner'
import PerformerList from '@components/MediaDetail/PerformerList'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import useFetch from '@hooks/useFetch'
import { useMemo } from 'react'
import { groupBy } from 'lodash'
import TVInfomation from '@components/MediaDetail/TVInfomation'
import SeasionList from '@components/MediaDetail/SeasionList'

function TVShowDetail() {
    const { id } = useParams()
    const { data: tvDetail, isloading: isLoadingTv } = useFetch({
        url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
    })
    const { data: recomendationsRes, isloading: isLoadingRecomendations } =
        useFetch({ url: `/tv/${id}/recommendations` })
    const recomendations = (recomendationsRes?.results || []).slice(0, 12)

    const certification = useMemo(() => {
        return (tvDetail?.content_ratings?.results || []).find(
            (result) => result.iso_3166_1 === 'US'
        )?.rating
    }, [tvDetail])

    const groupedCrews = useMemo(() => {
        const crews = (tvDetail?.aggregate_credits?.crew || [])
            .filter((crew) => {
                const jobs = (crew.jobs || []).map((crewJob) => crewJob.job)
                return ['Director', 'Writer'].some((job) =>
                    jobs.find((j) => j === job)
                )
            })
            .map((crew) => ({
                id: crew.id,
                job: crew.jobs[0].job,
                name: crew.name,
            }))
        return groupBy(crews, 'job')
    }, [tvDetail])

    const performers = (tvDetail?.aggregate_credits?.cast || []).map(
        (cast) => ({
            ...cast,
            character: cast.roles[0]?.character,
            episodeCount: cast.roles[0].episode_count,
        })
    )
    if (isLoadingTv) return <Loading />
    return (
        <div>
            <Banner
                title={tvDetail?.name}
                backdropPath={tvDetail?.backdrop_path}
                posterPath={tvDetail?.poster_path}
                releaseDate={tvDetail?.first_air_date}
                certification={certification}
                groupedCrews={groupedCrews}
                voteAverage={tvDetail?.vote_average}
                genres={tvDetail?.genres}
                trailerVideoKey={
                    tvDetail?.videos?.results?.find(
                        (video) => video.type === 'Trailer'
                    )?.key
                }
            />
            <div className="bg-black text-[1.2vw] text-white">
                <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                    <div className="flex-[2]">
                        <PerformerList performers={performers} />
                        <SeasionList
                            seasons={(tvDetail?.seasons || []).reverse()}
                        />
                        <RelatedMediaList
                            mediaList={recomendations}
                            isLoading={isLoadingRecomendations}
                            title={'More like this'}
                        />
                    </div>
                    <div className="flex-1">
                        <TVInfomation tvInfo={tvDetail} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TVShowDetail
