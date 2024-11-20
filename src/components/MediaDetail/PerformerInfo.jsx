import ImageCpn from '@components/Image'
import { Link } from 'react-router-dom'

const PerformerInfo = ({ id, name, profilePath, character, episodeCount }) => {
    return (
        <Link
            to={`/people/${id}`}
            className="overflow-hidden rounded-lg border border-slate-800 bg-black shadow-sm"
        >
            <ImageCpn
                className="w-full rounded-lg"
                src={
                    profilePath &&
                    `https://media.themoviedb.org/t/p/w276_and_h350_face/${profilePath}`
                }
                width={276}
                height={350}
                path={profilePath}
            />
            <div className="p-3">
                <p className="font-bold">{name}</p>
                <p>{character}</p>
                {episodeCount && (
                    <p>
                        {episodeCount}{' '}
                        {episodeCount > 1 ? 'Episodes' : 'Episode'}
                    </p>
                )}
            </div>
        </Link>
    )
}

export default PerformerInfo
