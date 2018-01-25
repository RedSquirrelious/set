import React from 'react'
import { connect } from 'react-redux'
import GridList, { GridListTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

import ButtonBoard from './ButtonBoard'
import BoardGridButton from './BoardGridButton'

import { selectCard } from '../actions/boardActions'
import { bindActionCreators } from 'redux';


const OldBoard = (props) => {
    if (props && props.cards.onBoard && props.cards.onBoard.length > 0) {
        console.log('hello blue people, won\'t you join us?')
        const deck = props.cards.onBoard
        return (
            <BoardGridButton 
                cards={deck}
                onClick={(card) => selectCard(card)} />
        )
    }
    else {
        return (
            <div><p>NOOOOO</p></div>
        )
    } 
}

const workingButtonBoard = (props) => {
    console.log(props.cards)
    if (props && props.cards.onBoard && props.cards.onBoard.length > 0) {
        console.log('hello blue people')
        const deck = props.cards.onBoard
        return (
            <ButtonBoard images={deck} />
        )
    }
    else {
        return (
            <div><p>NOOOOO</p></div>
        )
    } 
}



const oldWorkingBoard = (props) => {
    return renderGrid(props.cards)
}

const renderGrid = (props) => {
    const styles = boardStyles
    if (props.onBoard.length > 0) {
        const deck = props.onBoard
        return (
            <div style={styles.root}>
                <GridList 
                    cols={6}
                    cellHeight={200}
                    style={styles.gridList}>
                    {deck.map(tile => (
                        <GridListTile key={tile.img} cols={1}>
                            <img 
                                src={tile.img} 
                                alt={tile.img} 
                                style={styles.gridTile}/>
                        </GridListTile>
                    )
                    )}
                </GridList>
            </div>
        )
    }
    else {
        return <div><p>NOOOOOO</p></div>
    }
}

const renderTile = (data) => {
    <p>data</p>
}

export const doSomething = (props) => {
    console.log(props)
}

const boardStyles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1200,
        height: 1000,
        overflowY: 'auto',
    },
    gridTile: {
        width: 200,
        height: 200
    }
}




export default OldBoard