import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

import Game from './Game'

const defaultTheme = createMuiTheme()

export default class MainComponent extends React.Component {
    render() {
        const image = require('../assets/assetList.js')
        const rawImages = Object.entries(image)       

        return (
            <MuiThemeProvider theme={defaultTheme}>
                <Provider store={this.props.store}>
                    <Game 
                        images={rawImages}
                        theme={defaultTheme}
                    />
                </Provider>
            </MuiThemeProvider>
        )
    }
}

