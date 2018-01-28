import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import boardReducer from './reducers/boardReducer'
import reducer from './reducers'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 }) : compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))