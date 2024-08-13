import FeatureMovie from '../components/FeatureMovie'
import Header from '../components/Header'
import { TOP_RATED_TABS, TRENDING_TABS } from '../components/libs/constants'
import MediaList from '../components/MediaList'

function Home() {
    return (
        <>
            {/* header */}
            <Header />
            {/* hero */}
            <FeatureMovie />
            <MediaList title="Trending" tabs={TRENDING_TABS} />
            <MediaList title="Top rated" tabs={TOP_RATED_TABS} />
        </>
    )
}

export default Home
