import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'
import {star_pink_pattern_1} from './assets/assetList'


class MainComponent extends React.Component {
    render() {
        return (
        <div>
                <p>HELLO</p>
                {/* <Card imageName={image}/> */}
                <img src={star_pink_pattern_1} />
        </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
