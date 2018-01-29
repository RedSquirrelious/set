import { DEAL_CARDS, SELECT_CARD, CHECK_SET, SET_NO_SET, SET_YES_SET } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'

const defaultState = {
    score: 0
}

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_YES_SET:
            const updatedScore = state.score += 1
            return {...state, score: updatedScore }
        default:
            return state
    }
}

export default playerReducer