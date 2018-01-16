import React from 'react'
import { connect } from 'react-redux'
import GridList, { GridListTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

import { dealCards, selectCard } from '../actions/boardActions'

const Board = (props) => {
    return renderGrid(props.cards)
}

const renderGrid = (props) => {
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

const styles = {
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
        width: 100,
        height: 100
    }
}

export default Board