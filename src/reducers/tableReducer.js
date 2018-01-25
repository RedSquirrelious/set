import defaultState from '../defaults'
import { DEAL_CARDS, SELECT_CARD } from '../actions/tableActions'
import * as tableActions from '../actions/tableActions'    

const tableReducer = (state = defaultState, action) => {
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

export const checkSet = (tentativeSet, type) => {
    if (tentativeSet.length === 3) {
        if (tentativeSet[0].color === tentativeSet[1].color
            && tentativeSet[0] === tentativeSet[2].color
            && tentativeSet[1].color === tentativeSet[2].color) {
            return 1
        }
        else if (tentativeSet[0].color !== tentativeSet[1].color
            && tentativeSet[0] !== tentativeSet[2].color
            && tentativeSet[1].color !== tentativeSet[2].color) {
            return 1
        }
        return 10
    } 
}

export const checkColor = (tentativeSet, cards) => {
    // a set is 3 cards where each feature when looked at individually is either all the same OR all different
    if (tentativeSet.length === 3) {
        if (tentativeSet[0].color === tentativeSet[1].color 
            && tentativeSet[0] === tentativeSet[2].color 
            && tentativeSet[1].color === tentativeSet[2].color) {
            return 1
        }
        else if (tentativeSet[0].color !== tentativeSet[1].color
            && tentativeSet[0] !== tentativeSet[2].color
            && tentativeSet[1].color !== tentativeSet[2].color){
            return 1
        }
        return 10
    }
}

export const checkShape = (tentativeSet, cards) => {
    // a set is 3 cards where each feature when looked at individually is either all the same OR all different
    if (tentativeSet.length === 3) {
        if (tentativeSet[0].shape === tentativeSet[1].shape
            && tentativeSet[0] === tentativeSet[2].shape
            && tentativeSet[1].shape === tentativeSet[2].shape) {
            return 1
        }
        else if (tentativeSet[0].shape !== tentativeSet[1].shape
            && tentativeSet[0] !== tentativeSet[2].shape
            && tentativeSet[1].shape !== tentativeSet[2].shape) {
            return 1
        }
        return 10
    }
}

export const checkFill = (tentativeSet, cards) => {
    // a set is 3 cards where each feature when looked at individually is either all the same OR all different
    if (tentativeSet.length === 3) {
        if (tentativeSet[0].fill === tentativeSet[1].fill
            && tentativeSet[0] === tentativeSet[2].fill
            && tentativeSet[1].fill === tentativeSet[2].fill) {
            return 1
        }
        else if (tentativeSet[0].fill !== tentativeSet[1].fill
            && tentativeSet[0] !== tentativeSet[2].fill
            && tentativeSet[1].fill !== tentativeSet[2].fill) {
            return 1
        }
        return 10
    }
}

export const checkNumber = (tentativeSet, cards) => {
    // a set is 3 cards where each feature when looked at individually is either all the same OR all different
    if (tentativeSet.length === 3) {
        if (tentativeSet[0].number === tentativeSet[1].number
            && tentativeSet[0] === tentativeSet[2].number
            && tentativeSet[1].number === tentativeSet[2].number) {
            return 1
        }
        else if (tentativeSet[0].number !== tentativeSet[1].number
            && tentativeSet[0] !== tentativeSet[2].number
            && tentativeSet[1].number !== tentativeSet[2].number) {
            return 1
        }
        return 10
    }
}

export default tableReducer