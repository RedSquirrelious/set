import React from 'react'
import ReactDOM from 'react-dom'

require('./styles/app.css')
import Card from './components/Card'

class MainComponent extends React.Component {
    render() {
        const image = require('./assets/assetList.js')
        const allImages = image.allImages
        const showImage = generateRandomImage(allImages)

        return (
        <div>
                <Card
                    imageName={showImage}
                />
        </div>
        )
    }
}

const generateRandomImage = (imageList) => {
    const maxLength = imageList.length
    const indexForImage = generateRandomIntInclusive(0, maxLength)
    return imageList[indexForImage]
}

const generateRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1))
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
