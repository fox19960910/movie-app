import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const headerRef = useRef(null)
    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 0 && headerRef && headerRef.current) {
                headerRef.current.classList.add('bg-slate-950')
                headerRef.current.classList.remove('bg-transparent')
            } else {
                headerRef.current.classList.remove('bg-slate-950')
                headerRef.current.classList.add('bg-transparent')
            }
        }
        window.document.addEventListener('scroll', onScroll)

        return () => window.document.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-transparent px-4 text-white transition md:px-8 lg:h-20"
        >
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
                <Link to="/">
                    <img
                        src="/images/obesity.png"
                        alt="logo"
                        className="w-10 md:w-12"
                    />
                </Link>
                <a href="#" className="lg:text-xl">
                    Movies
                </a>
                <a href="#" className="lg:text-xl">
                    Series
                </a>
            </div>
            <div>
                <Link to="/search">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
