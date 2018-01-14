import React from 'react'
import ReactDOM from 'react-dom'

require('./styles/app.css')
import Card from './components/Card'
// import {heart_blue_clear_1} from './assets/assetList'


class MainComponent extends React.Component {
    render() {
        const image = require('./assets/assetList.js')
        
        return (
        <div>
                <Card
                    className='card'
                    imageName={image.paw_green_pattern_2}
                />
        </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
