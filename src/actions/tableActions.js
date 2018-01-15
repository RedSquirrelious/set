export const DEAL_CARDS = 'DEAL_CARDS'

export const dealCards = (cards) => {
    return {
    type: DEAL_CARDS,
        cards
    }
}

export default dealCards