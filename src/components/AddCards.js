import React from 'react'
import Button from '@material-ui/core/Button'

const AddCards = (props) => {
    const { addMethod } = props
    return (
        <span>
            <Button
                onClick={addMethod}
            >
                Add Cards
            </Button>
        </span>
    )
}


export default AddCards