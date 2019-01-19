import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Board from './Board'
import Scoreboard from './Scoreboard'
import AddCards from './AddCards'
import { dealCards, selectCard, setNoSet, setYesSet, addThreeCards } from '../actions/gameActions'

export class Game extends React.Component {

    static propTypes = {
        theme: PropTypes.object,
        images: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dealt, images, cards, set, theme, dispatch } = this.props
        if (dealt === false) {
            let deck = generateDeckOfCards(images)
            dispatch(dealCards(deck))
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
            <div>
                <div className='header'>
                    <Scoreboard 
                        score={score}
                    />
                    <AddCards 
                        addMethod={() => addCards(cards.inDeck, dispatch)}
                    />
                </div>
                <div>
                    <Board 
                        cards={cards}
                        theme={theme}
                        onClick={(card) => dispatch(selectCard(card))}
                />
                </div>
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