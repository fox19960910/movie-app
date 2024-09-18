import { currencyFormatter } from '@libs/utils'

const MovieInfomation = ({ movieInfo = {} }) => {
    return (
        <div>
            <h3 className="mb-4 text-[1.4vw] font-bold">Infomation</h3>
            <div className="mb-4">
                <p className="font-bold">Origin Name</p>
                <p>{movieInfo?.original_title}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Origin Country</p>
                {(movieInfo?.origin_country || []).map((country) => (
                    <img
                        key={country}
                        src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
                        alt=""
                        className="mx-1 w-[1.4vw]"
                    />
                ))}
            </div>
            <div className="mb-4">
                <p className="font-bold">Status</p>
                <p>{movieInfo?.status}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Budget</p>
                <p>{currencyFormatter(movieInfo?.budget)}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Revenue</p>
                <p>{currencyFormatter(movieInfo?.revenue)}</p>
            </div>
        </div>
    )
}

export default MovieInfomation
