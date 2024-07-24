function CircularProgressBar() {
    return (
        <div>
            <svg width="50px" height="50px">
                <circle
                    r="20px"
                    cx="25px"
                    cy="25px"
                    strokeWidth="5px"
                    stroke="white"
                />
                <circle
                    r="20px"
                    cx="25px"
                    cy="25px"
                    strokeWidth="5px"
                    stroke="green"
                />
            </svg>
        </div>
    )
}

export default CircularProgressBar
