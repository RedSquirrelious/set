import React from 'react'

const Scoreboard = (props = 0) => {
    const { score } = props
    debugger
    return (
        <div className='score'>
            <h1>Sets Collected: {score}</h1>
        </div>
    )
}

export default Scoreboard