import { useEffect, useRef } from 'react'

const PageginateIndicator = ({ pageList, activeId, setActiveMovieId }) => {
    const handleClickSlide = (slide) => {
        if (!(slide.id === activeId && setActiveMovieId)) {
            setActiveMovieId(slide.id)
        }
    }
    const intervalRef = useRef(null)

    useEffect(() => {
        const changeSlide = () => {
            let currentIndex = pageList.findIndex(
                (item) => item.id === activeId
            )
            currentIndex = (currentIndex + 1) % pageList.length
            setActiveMovieId(pageList[currentIndex]?.id)
        }

        // Clear any existing interval before creating a new one
        clearInterval(intervalRef.current)

        intervalRef.current = setInterval(changeSlide, 5000)

        return () => clearInterval(intervalRef.current)
    }, [pageList, activeId]) // Dependency array includes both pageList and activeId

    return (
        <ul className="flex gap-1">
            {pageList.map((item) => (
                <li
                    key={item.id}
                    className={`h-1 w-4 cursor-pointer ${item?.id === activeId ? 'bg-slate-100' : 'bg-slate-500'}`}
                    onClick={() => handleClickSlide(item)}
                ></li>
            ))}
        </ul>
    )
}

export default PageginateIndicator
