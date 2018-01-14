import React from 'react'

const Card = (props) => {
    return (
        <div className='card' >
            <img src={`${props.imageName}`} />
        </div>
    )
}

export default Card
