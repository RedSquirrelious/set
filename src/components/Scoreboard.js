import React from 'react'

const Scoreboard = (props = 0) => {
    const { score } = props
    return (
        <span>
            <h1>Sets Collected: {score}</h1>
        </span>
    )
}

export default Scoreboard