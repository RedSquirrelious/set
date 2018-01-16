import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as HotContainer } from 'react-hot-loader'

import { store } from './configureStore'
import MainComponent from './components/MainComponent'

require('./styles/app.css')

const render = (Component, store) =>
    ReactDOM.render(
        <HotContainer>
            <Component store={store} />
        </HotContainer>,
        document.getElementById('root')
    )

render(MainComponent, store)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/MainComponent', () => {
        render(MainComponent, store)
    })
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default)
    })
}

// ReactDOM.render(<MainComponent store={store}/>, document.getElementById('root'))
