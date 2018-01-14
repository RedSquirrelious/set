import React from 'react'

const Card = (props) => {
    return (
        <div className='myCard' >
            <img src={`${props.imageName}`} key={props.imageName}/>
        </div>
    )
}

export default Card
