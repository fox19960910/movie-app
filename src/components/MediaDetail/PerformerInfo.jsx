const PerformerInfo = ({ name, profilePath, character }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-black shadow-sm">
            <img
                className="rounded-lg"
                src={
                    profilePath
                        ? `https://image.tmdb.org/t/p/original/${profilePath}`
                        : '/images/276x350-no-img.svg'
                }
                alt=""
            />
            <div className="p-3">
                <p className="font-bold">{name}</p>
                <p>{character}</p>
            </div>
        </div>
    )
}

export default PerformerInfo
