import { SELECT_CARD } from '../actions/gameActions'
import * as gameActions from '../actions/gameActions'

const defaultState = {}
const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            const updatedCard = { ...action.card, selected: true }
            return 
        default: 
            return state
    }
}

const replaceCard = (cards, card) => {
    var foundIndex = cards.findIndex(c => c.id == card.id);
    cards[foundIndex] = card;
    return cards
}