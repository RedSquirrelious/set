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

export default dealCards