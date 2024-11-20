const MediaTypeInput = ({ onChange, name, value }) => {
    return (
        <div>
            <input
                type="radio"
                name={name}
                value={'movie'}
                checked={value === 'movie'}
                onChange={onChange}
                id="sf-type-movie"
            />
            <label htmlFor="sf-type-movie">Movie</label>
            <br />
            <input
                type="radio"
                name={name}
                value={'tv'}
                checked={value === 'tv'}
                onChange={onChange}
                id="sf-type-tv"
            />
            <label htmlFor="sf-type-tv">TV show</label>
        </div>
    )
}

export default MediaTypeInput
