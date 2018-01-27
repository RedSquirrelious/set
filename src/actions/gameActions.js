export const DEAL_CARDS = 'DEAL_CARDS'

export const dealCards = (cards) => {
    return {
    type: DEAL_CARDS,
        cards
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

export default dealCards
