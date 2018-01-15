import React from 'react'
import ReactDOM from 'react-dom'

import { store } from './configureStore'
import MainComponent from './components/MainComponent'

require('./styles/app.css')

ReactDOM.render(<MainComponent store={store}/>, document.getElementById('root'))
