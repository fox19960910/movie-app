const PageginateIndicator = ({ pageList, setMovies }) => {
    console.log('pageList', pageList)
    const handleClickSlide = (slide) => {
        if (!slide.active) {
            if (setMovies) {
                setMovies((prev) => {
                    const result = prev.map((item) => {
                        if (item.id === slide.id) {
                            return { ...item, active: true }
                        }
                        return { ...item, active: false }
                    })
                    return result
                })
            }
        }
    }
    return (
        <ul className="flex gap-1">
            {pageList.map((item) => (
                <li
                    key={item.id}
                    className={`h-1 w-4 cursor-pointer ${item?.active ? 'bg-slate-100' : 'bg-slate-500'}`}
                    onClick={() => handleClickSlide(item)}
                ></li>
            ))}
        </ul>
    )
}

export default PageginateIndicator
