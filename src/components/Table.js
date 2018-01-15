import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Board from './Board'
import * as tableActions from '../actions/tableActions'

export class Table extends React.Component {

    static propTypes = {
        images: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dealt, images, dispatch } = this.props

        if (dealt === false) {
            let deck = generateDeckOfCards(images)
            console.log(deck)
            console.log(this.props)
            dispatch(tableActions.dealCards(deck))
        }
    }
    render() {
        const {cards} = this.props
        return (
            <div>
                <Board cards={cards}/>
            </div>
        )
    }
}

const generateDeckOfCards = (array) => {
    let shuffledArray = shuffleArray(array)
    let deck = shuffledArray.map(card => makeCard(card))
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

const mapStateToProps = (state, ownProps) => {
    console.log('Table ownProps', ownProps)
    console.log('Table state', state)
    return {
        ...ownProps,
        dealt: state.dealt,
        cards: state.cards.onBoard

    }
}

export default connect(mapStateToProps)(Table)