import { DEAL_CARDS, SELECT_CARD, CHECK_SET, SET_NO_SET, SET_YES_SET, ADD_THREE_CARDS } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'    
import { updateCards } from './gameReducer';

const defaultState =  {
    onBoard: [],
    played: [],
    inDeck: [],
    possibleSet: []
}

const cardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DEAL_CARDS:
            let deckCopy = [...action.cards]
            let updatedOnBoard = deckCopy.slice(0, action.number)
            let updatedInDeck = deckCopy.slice(action.number)
            return { ...state, onBoard: updatedOnBoard, inDeck: updatedInDeck}
        case SELECT_CARD:
            let onBoardCopy = [...(state.onBoard || [])]
            let cardIndex = onBoardCopy.findIndex(card => card.id === action.card.id)
            let updatedCard = {...onBoardCopy[cardIndex], selected: true}
            onBoardCopy[cardIndex] = updatedCard       
            let updatedSet = [...(state.possibleSet || [])].concat([updatedCard])
            return {...state, possibleSet: updatedSet, onBoard: onBoardCopy}
        case SET_NO_SET:
            let tempNoSet = {...state}
            let boardWithoutSet = unselectCards(tempNoSet.onBoard, tempNoSet.possibleSet)
            return { ...state, onBoard: boardWithoutSet, possibleSet: []}
        case SET_YES_SET:
            let tempCards = moveCardsFromInDeckToOnBoard({...state})
            let cleanedUpOnBoard = updateOnBoardAfterSet(tempCards.onBoard, tempCards.possibleSet)
            tempCards.onBoard = cleanedUpOnBoard
            tempCards.played = tempCards.played.concat(tempCards.possibleSet)
            tempCards.possibleSet = []
            return tempCards
        case ADD_THREE_CARDS:
            let movedCards = moveCardsFromInDeckToOnBoard({ ...state })
            return movedCards
        default:
            return state
    }
}

export const unselectCards = (cardsOnBoard, selectedCards) => {
    let updatedCard
    let cardIndex
    for (let i = 0; i < selectedCards.length; i++) {

        cardIndex = cardsOnBoard.findIndex(card => card.id === selectedCards[i].id)
        updatedCard = {...cardsOnBoard[cardIndex], selected: false}
        cardsOnBoard[cardIndex] = updatedCard
    }
    return cardsOnBoard
}

export const updateOnBoardAfterSet = (cardsOnBoard, set) => {
    let updatedCards = cardsOnBoard.filter(card => card.selected === false)
    return updatedCards
}

export const moveCardsFromInDeckToOnBoard = (cards) => {
    let newCard
    
    if (cards.inDeck.length > 3) {
        for (let i = 3; i > 0; i--) {
            newCard = cards.inDeck.pop()
            cards.onBoard.push(newCard)
    
        }
    } else {
        for (let i = cards.inDeck.length; i > 0; i--) {
            newCard = cards.inDeck.pop()
            cards.onBoard.push(newCard)
        }
    }
    return cards
}

export default cardsReducer
