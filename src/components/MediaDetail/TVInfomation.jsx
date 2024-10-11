const TVInfomation = ({ tvInfo = {} }) => {
    return (
        <div>
            <h3 className="mb-4 text-[1.4vw] font-bold">Infomation</h3>
            <div className="mb-4">
                <p className="font-bold">Origin Name</p>
                <p>{tvInfo?.original_title}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Origin Country</p>
                {(tvInfo?.origin_country || []).map((country) => (
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
                <p>{tvInfo?.status}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Network</p>
                {(tvInfo.networks || []).map((network) => (
                    <img
                        className="invert"
                        key={network.id}
                        src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default TVInfomation
