import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import boardReducer from './reducers/boardReducer'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))