// import { defaultCards } from '../defaults'
import { DEAL_CARDS, SELECT_CARD, CHECK_SET, SET_NO_SET, SET_YES_SET } from '../actions/gameActions'
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
            console.log('cardsReducer cards', action.cards)
            let deckCopy = [...action.cards]
            let updatedOnBoard = deckCopy.slice(0, 18)
            let updatedInDeck = deckCopy.slice(19)
            
            
        
            // for (let i = 0; i < forDeck.length; i++) {
            //     updatedInDeck[forDeck[i].id] = forDeck[i]
            // }
            return { ...state, onBoard: updatedOnBoard, inDeck: updatedInDeck}
        case SELECT_CARD:
            let onBoardCopy = [...state.onBoard]
            let cardIndex = onBoardCopy.findIndex(card => card.id === action.card.id)
            let updatedCard = {...onBoardCopy[cardIndex], selected: true}
            onBoardCopy[cardIndex] = updatedCard
            let updatedSet = [...state.possibleSet].concat([updatedCard])
            return {...state, possibleSet: updatedSet, onBoard: onBoardCopy}
        case SET_NO_SET:
            let tempNoSet = {...state}
            let boardWithoutSet = updateCardSelectionStatus(tempNoSet.onBoard, tempNoSet.possibleSet)
            console.log('UGH')
            debugger
            console.log(tempNoSet)
            return { ...state, onBoard: boardWithoutSet, possibleSet: []}
        case SET_YES_SET:
            let tempCards = moveCardsFromInDeckToOnBoard({...state})
            let cleanedUpOnBoard = updateOnBoardAfterSet(tempCards.onBoard, tempCards.possibleSet)
            tempCards.onBoard = cleanedUpOnBoard
            tempCards.played = tempCards.played.concat(tempCards.possibleSet)
            tempCards.possibleSet = []
            console.log('tempCards!!!', tempCards)
            debugger
            return tempCards
        default:
            return state
    }
}

const updateCardSelectionStatus = (cardsOnBoard, selectedCards) => {
    let wantedCard
    let updatedCard
    let cardIndex
    for (let i = 0; i < selectedCards.length; i++) {
        debugger
        cardIndex = cardsOnBoard.findIndex(card => card.id === selectedCards[i].id)
        updatedCard = {...cardsOnBoard[cardIndex], selected: false}
        cardsOnBoard[cardIndex] = updatedCard
    }
    console.log('should be 3 cards none selected', cardsOnBoard)
    return cardsOnBoard
}

export const updateOnBoardAfterSet = (cardsOnBoard, set) => {
    debugger
    let updatedCards = cardsOnBoard.filter(card => card.selected === false)
    debugger
    return updatedCards
}

export const moveCardsFromInDeckToOnBoard = (cards) => {
    let newCard
    debugger
    if (cards.inDeck.length != 0) {
        for (let i = 3; i > 0; i--) {
            debugger
            newCard = cards.inDeck.pop()
            cards.onBoard.push(newCard)
            debugger
        }
    }
    debugger
    return cards
}

// export const updateCardsAfterSet = (cards, card) => {
//     let updatedPlayed = [].concat(cards.played)
//     let updatedBoard = cards.onBoard.filter(c => c.id != card.id)
//     updatedBoard = updatedBoard.length > 0 ? updatedBoard : []
//     let updatedDeck = [...cards.inDeck]
//     const newCard = updatedDeck.length > 0 ? updatedDeck.pop() : null
//     updatedPlayed.push(card)
//     if (newCard) { updatedBoard.push(newCard) }
//     const updatedCards = {
//         onBoard: updatedBoard,
//         played: updatedPlayed,
//         inDeck: updatedDeck
//     }
//     return updatedCards
// }
export default cardsReducer