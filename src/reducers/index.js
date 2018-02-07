import { combineReducers } from 'redux'

import cards from './cardsReducer'
import game from './gameReducer'
import player from './playerReducer'

export default combineReducers({ cards, game, player })