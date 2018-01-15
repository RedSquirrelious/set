import React from 'react'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { dealCards, selectCard } from '../actions/boardActions'

const Board = (props) => {
    const deck = props.cards? props.cards : []
    return (
        <div style={styles.root}>
            <GridList
                cols={6}
                cellHeight={200}
                style={styles.gridList}
            >
                {deck.map((card) => (
                    <GridTile
                        key={card.img}
                        title={card.img}
                        actionIcon={<IconButton
                            onClick={() => doSomething(card.img)}
                        ><StarBorder color="white" /></IconButton>}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >
                        <img src={card.img}
                            style={styles.gridTile}
                        />
                    </GridTile>
                ))}
            </GridList>
        </div>
    )
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