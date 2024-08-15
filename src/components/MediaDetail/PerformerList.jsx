import PerformerInfo from './PerformerInfo'

const PerformerList = () => {
    return (
        <div>
            <h3>Actor</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4">
                <PerformerInfo />
                <PerformerInfo />
                <PerformerInfo />
                <PerformerInfo />
            </div>
        </div>
    )
}

export default PerformerList
