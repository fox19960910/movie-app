import { useState } from 'react'
import PerformerInfo from './PerformerInfo'

const PerformerList = ({ performers = [] }) => {
    const [isShowMore, setIsShowMore] = useState(false)
    const currentPerformers = isShowMore ? performers : performers.slice(0, 4)
    return (
        <div>
            <h3 className="mb-4 text-[1.4vw] font-bold">Actor</h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {currentPerformers.length > 0 &&
                    currentPerformers.map((performer) => (
                        <PerformerInfo
                            key={performer.id}
                            id={performer.id}
                            name={performer.name}
                            profilePath={performer.profile_path}
                            character={performer.character}
                            episodeCount={performer?.episodeCount}
                        />
                    ))}
            </div>
            <div>
                <p
                    className="mt-1 cursor-pointer"
                    onClick={() => setIsShowMore((prev) => !prev)}
                >
                    {isShowMore ? 'Show less' : ' Show more'}
                </p>
            </div>
        </div>
    )
}

export default PerformerList
