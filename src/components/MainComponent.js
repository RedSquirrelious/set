import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { hot } from 'react-hot-loader/root'

import Game from './Game'

const defaultTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    }
})

class MainComponent extends React.Component {
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

export default hot(MainComponent)