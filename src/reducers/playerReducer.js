import { DEAL_CARDS, SELECT_CARD, CHECK_SET, SET_NO_SET, SET_YES_SET } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'

const defaultState = {
    points: 0
}

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_YES_SET:
            return {...state, points: state.points += 1}
        default:
            return state
    }
}

export default playerReducer