import defaultState from '../defaults'
import {SELECT_CARD} from '../actions/boardActions'
import * as tableActions from '../actions/tableActions'

// const defaultState = {}

const boardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case tableActions.DEAL_CARDS:
            let forBoard = action.cards.slice(0, 12)
            let forDeck = action.cards.slice(13)
            let boardStart = {
                onBoard: forBoard,
                played: [],
                inDeck: forDeck
            }
            let newState = {...state, cards: boardStart, dealt:true}
            
            return { ...state, cards: boardStart, dealt: true }
        case 'SELECT_CARD':
            const updatedCards = updateCards(state, action.card)
            return updatedCards
        default:
            return state
    }
}

export const updateCards = (cards, card) => {
    let updatedPlayed = [].concat(cards.played)
    let updatedBoard = cards.onBoard.filter(c => c == card)
    let updatedDeck = [...cards.inDeck]

    const newCard = updatedDeck.length > 0 ? updatedDeck.pop() : null

    updatedPlayed.push(card)
    if (newCard) { updatedBoard.push(newCard)}

    const updatedCards = {
        onBoard: updatedBoard,
        played: updatedPlayed,
        inDeck: updatedDeck
    }
    return updatedCards
}




export default boardReducer


const test = [{ img: 'T1' }, { img: 'T2' }, 
{ img: 'T3' }, { img: 'T4' }, 
{ img: 'T5' }, { img:'T6'},
{ img: 'T7' }, { img: 'T8' }, 
{ img: 'T9' }, { img: 'T10' },
{ img: 'T11' }, { img: 'T12' },
{ img: 'T13' }, { img: 'T14' },
{ img: 'T15' }, { img: 'T16' },
{ img: 'T17' }, { img: 'T18' },
{ img: 'T19' }, { img: 'T20' }]