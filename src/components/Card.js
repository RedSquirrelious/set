import React from 'react'

const Card = (props) => {
    return (
        <div className={`${props.className}`} >
            <img src={`${props.imageName}`} />
        </div>
    )
}

export default Card
