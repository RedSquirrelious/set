import { SET_YES_SET, RESET_SCORE } from '../actions/gameActions'

const defaultState = {
    score: 0
}

const playerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESET_SCORE:
            return {...state, score: 0}
        case SET_YES_SET:
            const updatedScore = state.score += 1
            return {...state, score: updatedScore }
        default:
            return state
    }
}

export default playerReducer