import defaultState from '../defaults'
import { DEAL_CARDS, SELECT_CARD, CHECK_SET } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'    

const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DEAL_CARDS:
            let forBoard = action.cards.slice(0, 18)
            let forDeck = action.cards.slice(19)
            let boardStart = {
                onBoard: forBoard,
                played: [],
                inDeck: forDeck
            }
            return { ...state, cards: boardStart, dealt: true }
        case SELECT_CARD:
            const updatedCards = updateCards(state.cards, action.card)
            return { ...state, cards: updatedCards }
        case CHECK_SET:
            const isSet = checkSetOverall(action.cards, action.types)
            const updatedPoints = updatePoints(isSet, state.points)
            return { ...state, points: updatedPoints, set: isSet }
        default:
            return state
    }
}

export const updateCards = (cards, card) => {
    let updatedPlayed = [].concat(cards.played)
    let updatedBoard = cards.onBoard.filter(c => c.id != card.id)
    updatedBoard = updatedBoard.length > 0 ? updatedBoard : []
    let updatedDeck = [...cards.inDeck]
    const newCard = updatedDeck.length > 0 ? updatedDeck.pop() : null
    updatedPlayed.push(card)
    if (newCard) { updatedBoard.push(newCard) }
    const updatedCards = {
        onBoard: updatedBoard,
        played: updatedPlayed,
        inDeck: updatedDeck
    }
    return updatedCards
}

export const checkSetByType = (tentativeSet, type) => {
    if (tentativeSet.length === 3) {
        if (tentativeSet[0][type] === tentativeSet[1][type]
            && tentativeSet[0][type] === tentativeSet[2][type]
            && tentativeSet[1][type] === tentativeSet[2][type]) {
            return 1
        }
        else if (tentativeSet[0][type] !== tentativeSet[1][type]
            && tentativeSet[0] !== tentativeSet[2][type]
            && tentativeSet[1][type] !== tentativeSet[2][type]) {
            return 1
        }
        return 10
    } 
}

export const checkSetOverall = (tentativeSet, types) => {
    let counter = 0
    for (let i = 0; i < types.length; i++) {
        counter += checkSetByType(tentativeSet, types[i])
    }
    return counter < 10 ? true : false
}

export const updatePoints = (isSet, points) => {
    let updatedPoints = points
    if (isSet) { updatedPoints += 1 }
    return updatedPoints
}


export default gameReducer