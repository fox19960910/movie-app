import ImageCpn from '@components/Image'

const PerformerInfo = ({ name, profilePath, character }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-black shadow-sm">
            <ImageCpn
                className="w-full rounded-lg"
                src={
                    profilePath
                        ? `https://image.tmdb.org/t/p/original/${profilePath}`
                        : '/images/276x350-no-img.svg'
                }
                width={91}
                height={136}
            />
            <div className="p-3">
                <p className="font-bold">{name}</p>
                <p>{character}</p>
            </div>
        </div>
    )
}

export default PerformerInfo
