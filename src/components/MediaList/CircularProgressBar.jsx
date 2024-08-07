function CircularProgressBar({ percent = 9, size = 3, strokeWidth = 0.25 }) {
    const r = size / 2 - strokeWidth
    const c = 2 * 3.14 * r
    return (
        <div>
            <svg width={`${size}vw`} height={`${size}vw`}>
                <circle
                    r={`${r}vw`}
                    cx={`${size / 2}vw`}
                    cy={`${size / 2}vw`}
                    strokeWidth={`${strokeWidth}vw`}
                    stroke="white"
                />
                <circle
                    r={`${size / 2 - strokeWidth}vw`}
                    cx={`${size / 2}vw`}
                    cy={`${size / 2}vw`}
                    strokeWidth={`${strokeWidth}vw`}
                    stroke="green"
                    strokeDasharray={`${c}vw`} // 2*Pi*R => chu vi =
                    strokeDashoffset={`${c - ((percent * 10) / 100) * c}vw`}
                    transform="rotate(-90)"
                    style={{ transformOrigin: 'center' }}
                    strokeLinecap="round"
                    fill="none"
                />
                <text
                    x={`${size / 2}vw`}
                    y={`${size / 2}vw`}
                    fill="white"
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    fontSize="1.2vw"
                >
                    {percent * 10}
                </text>
            </svg>
        </div>
    )
}

export default CircularProgressBar
