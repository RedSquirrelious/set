import React from 'react'
import { connect } from 'react-redux'

import Board from './Board'
import ButtonAppBar from './ButtonAppBar'

import { dealCards, selectCard, setNoSet, setYesSet, addThreeCards, resetScore } from '../actions/gameActions'

export class Game extends React.Component {

    componentDidMount() {
        const { dealt, images, cards, set, theme, dispatch } = this.props
        if (dealt === false) {
            deal(dispatch)
        }
        if (set && set.length === 3) {
            dispatch(checkSet(set))
        }
    }

    componentDidUpdate() {
        const { possibleSet, haveSet, checkingSet, dispatch } = this.props
        if (possibleSet && possibleSet.length === 3) {
            checkSetOverall(possibleSet, cardTypes, dispatch)
        }
    }
    render() {
        const {cards, score, dispatch, theme } = this.props       
        return (
            <span>
                <ButtonAppBar 
                    score ={score}
                    addMethod={() => addCards(cards.inDeck, dispatch)}
                    dealMethod={() => deal(dispatch)}
                />
                <div>
                    <Board 
                        cards={cards}
                        theme={theme}
                        onClick={(card) => dispatch(selectCard(card))}
                    />
                </div>
            </span>
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

const deal = (dispatch) => {
    const image = require('../assets/assetList.js')
    const rawImages = Object.entries(image)
    let deck = generateDeckOfCards(rawImages)
    dispatch(resetScore())
    dispatch(dealCards(deck, 18))
}

const cardTypes = ['color', 'shape', 'fill', 'number']

export const checkSetByType = (tentativeSet, type) => {
    if (tentativeSet.length === 3) {
        if (tentativeSet[0][type] === tentativeSet[1][type]
            && tentativeSet[0][type] === tentativeSet[2][type]
            && tentativeSet[1][type] === tentativeSet[2][type]) {
            return 1
        }
        else if (tentativeSet[0][type] !== tentativeSet[1][type]
            && tentativeSet[0][type] !== tentativeSet[2][type]
            && tentativeSet[1][type] !== tentativeSet[2][type]) {
            return 1
        }
        return 10
    }
}

export const checkSetOverall = (tentativeSet, types, dispatch) => {
    let counter = 0
    for (let i = 0; i < types.length; i++) {
        counter += checkSetByType(tentativeSet, types[i])
    }
    counter < 10 ? 
        dispatch(setYesSet(tentativeSet))
        : dispatch(setNoSet(tentativeSet)) 
}

const addCards = (inDeck, dispatch) => {
    if (inDeck.length > 0) {
        dispatch(addThreeCards())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        dealt: state.game.dealt,
        cards: state.cards,
        possibleSet: state.cards.possibleSet,
        haveSet: state.haveSet,
        checkingSet: state.checkingSet,
        score: state.player.score
    }
}

export default connect(mapStateToProps)(Game)