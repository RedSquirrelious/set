import React from 'react'
import Button from '@material-ui/core/Button'

const NewGame = (props) => {
    const { onClick } = props
    return ( 
        <span>
            <Button onClick = {onClick}> New Game </Button> 
        </span>
    )
}

export default NewGame