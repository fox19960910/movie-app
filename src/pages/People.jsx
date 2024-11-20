import ImageCpn from '@components/Image'
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList'
import { GENDER_MAPPING } from '@libs/constants'
import { useLoaderData } from 'react-router-dom'

const People = () => {
    const peopleInfo = useLoaderData()

    return (
        <div className="bg-black text-[1.2vw] text-white">
            <div className="container">
                <div className="flex-1">
                    <ImageCpn
                        src={
                            peopleInfo.profile_path &&
                            `https://image.tmdb.org/t/p/original/${peopleInfo.profile_path}`
                        }
                        width={600}
                        height={900}
                        className="mb-6"
                    />
                    <div>
                        <p className="mb-4 text-[1.5vw] font-bold">
                            Personal Info
                        </p>
                        <div className="space-y-3">
                            <p className="font-bold">Know For</p>
                            <p className="text-gray-500">
                                {peopleInfo.known_for_department}
                            </p>
                            <p className="font-bold">Gender</p>
                            <p className="text-gray-500">
                                {GENDER_MAPPING[peopleInfo.gender]}
                            </p>
                            <p className="font-bold">Place of Birth</p>
                            <p className="text-gray-500">
                                {peopleInfo.place_of_birth}
                            </p>
                            <p className="font-bold">Birthday</p>
                            <p className="text-gray-500">
                                {peopleInfo.birthday}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-[2]">
                    <p className="mb-6 text-2xl font-bold">{peopleInfo.name}</p>
                    <div className="mb-6">
                        <p className="text-lg font-bold">Biography</p>
                        <p className="whitespace-pre-line">
                            {peopleInfo.biography}
                        </p>
                    </div>

                    <div>
                        <RelatedMediaList
                            mediaList={peopleInfo.combined_credits.cast || []}
                            title="Known for"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People
