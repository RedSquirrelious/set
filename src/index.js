import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

class MainComponent extends React.Component {
    render() {
        return (
        <div>
                <p>HELLO</p>
                <Card imageName={require('set_purple_clear_diamonds_1.png')}/>
        </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'))
