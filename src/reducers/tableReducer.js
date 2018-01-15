import defaultState from '../defaults'
import * as tableActions from '../actions/tableActions'
     

const tableReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            console.log('STATE ***** ', state)
            return state
    }
}

export default tableReducer