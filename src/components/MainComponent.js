import React from 'react'
import { Provider } from 'react-redux'
import {MuiThemeProvider} from 'material-ui'
// import createMuiTheme from 'material-ui/styles/createMuiTheme'

import Table from './Table'


export default class MainComponent extends React.Component {
    render() {
        const image = require('../assets/assetList.js')
        const allImages = image.allImages

        return (

                <Provider store={this.props.store}>
                    <Table images={allImages}/>
                </Provider>

        )
    }
}
