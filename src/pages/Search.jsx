import SearchForm from '@components/Search/SearchForm'

const Search = () => {
    return (
        <div className="bg-black text-[1.2vw] text-white">
            <div className="container">
                <div className="flex">
                    <div className="flex-1">
                        <SearchForm />
                    </div>
                    <div className="flex-[3]">
                        <p>result</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
