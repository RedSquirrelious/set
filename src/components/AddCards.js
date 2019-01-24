import React from 'react'
import Button from '@material-ui/core/Button'

import { addThreeCards } from '../actions/gameActions'

const AddCards = (props) => {
    const { addMethod } = props
    return (
        <div>
            <Button
                onClick={addMethod}
            >
                Add Cards
            </Button>
        </div>
    )
}


export default AddCards