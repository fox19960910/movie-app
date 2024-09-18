import { useEffect, useState } from 'react'

const ImageCpn = ({ src, width, height, className }) => {
    const [currentSrc, setCurrentSrc] = useState(
        `https://placehold.co/${width}x${height}?text=Loadinhg`
    )

    useEffect(() => {
        const img = new Image()
        img.src = src
        Image.onload = () => {
            setCurrentSrc(src)
        }
    }, [src])
    return (
        <img
            className={currentSrc === src ? className : `${className} blur-md`}
            src={currentSrc}
            alt=""
            width={width}
            height={height}
        />
    )
}

export default ImageCpn
