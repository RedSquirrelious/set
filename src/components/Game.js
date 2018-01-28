import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withTheme } from 'material-ui/styles'

import Board from './Board'
import { dealCards, selectCard, checkSet } from '../actions/gameActions'

export class Game extends React.Component {

    static propTypes = {
        images: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dealt, images, cards, dispatch } = this.props
        
        if (dealt === false) {
            let deck = generateDeckOfCards(images)
            dispatch(dealCards(deck))
        }

        // if (cards && cards.played && cards.tentativeSet.length === 3) {
        //     dispatch(checkSet(cards.played))
        // }
    }
    render() {
        const {cards, dispatch } = this.props
        
        return (
            <div>
                <Board 
                    cards={cards}
                    onClick={(card) => dispatch(selectCard(card))}
            />
            </div>
        )
    }
}

const generateDeckOfCards = (rawImages) => {
    let cards = rawImages.map(image => makeCards(image))
    let shuffledArray = shuffleArray(cards)
    let deck = shuffledArray
    return deck
}

const makeCards = (array) => {
    const data = array[0].split('_')
    return {
        id: array[0],
        shape: data[0],
        color: data[1],
        fill: data[2],
        number: data[3],
        url: array[1],
        selected: false,
        width: '10%'
    }
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const newSelectCard = (cards, card) => {
    if (cards.tentativeSet.length === 3) {
        dispatch(checkSet(cards.tentativeSet))
    }
    else {
        return
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        dealt: state.dealt,
        cards: state.cards,
    }
}

export default connect(mapStateToProps)(Game)