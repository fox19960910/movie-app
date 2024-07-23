import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <header className="flex h-16 items-center justify-between bg-slate-950 px-4 text-white md:px-8">
            <div className="flex items-center gap-2 md:gap-4">
                <img
                    src="./images/obesity.png"
                    alt="logo"
                    className="w-10 md:w-12"
                />
                <a href="#">Movies</a>
                <a href="">Series</a>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="cursor-pointer"
                />
            </div>
        </header>
    )
}

export default Header
