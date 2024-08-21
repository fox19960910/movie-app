import FeatureMovie from '../components/FeatureMovie'
import { TOP_RATED_TABS, TRENDING_TABS } from '../libs/constants'
import MediaList from '../components/MediaList'

function Home() {
    return (
        <>
            {/* hero */}
            <FeatureMovie />
            <MediaList title="Trending" tabs={TRENDING_TABS} />
            <MediaList title="Top rated" tabs={TOP_RATED_TABS} />
        </>
    )
}

export default Home
