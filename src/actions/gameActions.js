export const DEAL_CARDS = 'DEAL_CARDS'

export const dealCards = (cards, number) => {
    return {
    type: DEAL_CARDS,
        cards,
        number
    }
}

export const SELECT_CARD = 'SELECT_CARD'

export const selectCard = (card) => ({
    type: SELECT_CARD,
    card
})

export const CHECK_SET = 'CHECK_SET'

export const checkSet = (cards) => ({
    type: CHECK_SET,
    types: ['color', 'shape', 'fill', 'number'],
    cards
})

export const SET_NO_SET = 'SET_NO_SET'

export const setNoSet = (possibleSet) => ({
    type: SET_NO_SET,
    cards: possibleSet
})

export const SET_YES_SET = 'SET_YES_SET'

export const setYesSet = (possibleSet) => ({
    type: SET_YES_SET,
    cards: possibleSet
})

export const ADD_THREE_CARDS = 'ADD_THREE_CARDS'

export const addThreeCards = () => ({
    type: ADD_THREE_CARDS
})

export default dealCards
