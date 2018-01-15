import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Table from './Table'


export default class MainComponent extends React.Component {
    render() {
        const image = require('../assets/assetList.js')
        const allImages = image.allImages

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Provider store={this.props.store}>
                    <Table images={allImages}/>
                </Provider>
            </MuiThemeProvider>
        )
    }
}
