import { useEffect, useState } from 'react'

const ImageCpn = ({ src, width, height, className }) => {
    const [currentSrc, setCurrentSrc] = useState(
        `https://placehold.co/${width}x${height}?text=Loading`
    )

    useEffect(() => {
        const img = new Image()
        if (src) {
            img.src = src
            img.onload = () => {
                setCurrentSrc(src)
            }
        }
        setCurrentSrc(`https://placehold.co/${width}x${height}?text=No image`)
        return () => {
            img.onload = null
        }
    }, [src, width, height])
    return (
        <img
            className={currentSrc === src ? className : `${className} blur-sm`}
            src={currentSrc}
            alt=""
            width={width}
            height={height}
        />
    )
}

export default ImageCpn
