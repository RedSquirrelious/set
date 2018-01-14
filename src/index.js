import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

require('./styles/app.css')
import Card from './components/Card'
import Board from './components/Board'

class MainComponent extends React.Component {
    render() {
        const image = require('./assets/assetList.js')
        const allImages = image.allImages
        const hand = generateDeckOfCards(allImages)

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Board cards={hand} />
            </MuiThemeProvider>
        )
    }
}

const generateDeckOfCards = (array) => {
    let shuffledArray = shuffleArray(array)
    let deck = shuffledArray.map(card => makeCard(card) )
    return deck
}

const makeCard = (image) => {
    let card = {}
    card.img = image
    return card
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}




// const generateHandOfCards = (imageList) => {
//     const hand = {}
//     let counter = imageList.length
//     let maxLength = imageList.length
//     for (let i = 0; i < maxLength; i++) {
//         let card = generateRandomImage(imageList, counter)
//         if (!hand[card]) {
//             hand[card] = card
//             counter -= 1
//         }
//         else {
//             i -= 1
//         }
//     }
//     return Object.keys(hand)
// }

const generateRandomImage = (imageList, maxLength) => {
    const indexForImage = generateRandomIntInclusive(0, maxLength)
    return imageList[indexForImage]
}

const generateRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1))
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))
