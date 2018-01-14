import React from 'react'

const Card = (imageName) => {
    return (
        <div className='card'>
            <img src={imageName} alt={imageName}/>
        </div>
    )
}

export default Card