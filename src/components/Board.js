import React from 'react'
import { connect } from 'react-redux'
import GridList, { GridListTile } from 'material-ui/GridList'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'

const Board = (props) => {
    if (props && props.cards.onBoard && props.cards.onBoard.length > 0) {
        const deck = props.cards.onBoard
        return (
            <div style={styles.root}>
                <GridList
                    cols={6}
                    cellHeight={200}
                    style={styles.gridList}>
                    {deck.map(card => (
                        <ButtonBase
                            key={card.id}
                            onClick={(selectedCard) => {
                                props.onClick(selectedCard.target)}
                            }
                        >
                            <GridListTile key={card.id} cols={1}>
                                <img
                                    id={card.id}
                                    src={card.url}
                                    alt={card.id}
                                    color={card.color}
                                    fill={card.fill}
                                    number={card.number}
                                    shape={card.shape}
                                    style={styles.gridTile} />
                            </GridListTile>
                        </ButtonBase>
                    )
                    )}
                </GridList>
            </div>
        )
    }
    else {
        return (
            <div><p>There seems to be some trouble showing the board.</p></div>
        )
    } 
}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
    gridList: {
        minwidth: 1200,
        minheight: 1000,
        overflowY: 'auto',
    },
    gridTile: {
        width: 175,
        height: 175,
        border: 'solid black',
    },
    gridImage: {

    }
}

export default Board