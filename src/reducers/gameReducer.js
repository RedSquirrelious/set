import { defaultGame } from '../defaults'
import { DEAL_CARDS, SELECT_CARD, CHECK_SET, SET_NO_SET, SET_YES_SET } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'    

const defaultState = defaultGame

const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DEAL_CARDS:
            return { ...state, dealt: true }
        case CHECK_SET:
            const isSet = checkSetOverall(action.cards, action.types)
            const updatedPoints = updatePoints(isSet, state.points)
            return { ...state, points: updatedPoints, haveSet: isSet, checkingSet: true}
        case SET_NO_SET:
            console.log('boooooooo')
            return {...state, haveSet: false, checkingSet: false}
        case SET_YES_SET:
            console.log('yay')
        default:
            return state
    }
}

const replaceCard = (cards, card) => {
    var foundIndex = cards.findIndex(c => c.id == card.id);
    cards[foundIndex].selected = true
    return cards
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