import React from 'react'
import { connect } from 'react-redux'
import GridList, { GridListTile } from 'material-ui/GridList'

import { withStyles } from 'material-ui/styles'
import { withTheme } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'

class Board extends React.Component {
    render() {
        const { cards, onClick, dispatch, theme } = this.props
        if (cards && cards.onBoard) {
            const deck = Object.values(cards.onBoard)
            console.log('deck on board', deck)
            return (
                <div style={styles.root}>
                    <GridList
                        cols={6}
                        cellHeight={200}
                        style={styles.gridList}>
                        {deck.map(card => (
                            <ButtonBase
                                focusRipple
                                key={card.id}
                                onClick={(selectedCard) => {
                                    onClick(selectedCard.target)}
                                }
                            >
                                <span className={styles.imageBackdrop} />
                                <GridListTile key={card.id} cols={1}>
                                    <img
                                        id={card.id}
                                        src={card.url}
                                        alt={card.id}
                                        color={card.color}
                                        fill={card.fill}
                                        number={card.number}
                                        shape={card.shape}
                                        style={card.selected ? styles.gridTile : {...styles.gridTile, border: 'solid black'}} 
                                        />
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
        border: 'solid red'
    },
    selectedCard: {
        color: 'red',
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        dealt: state.dealt,
        cards: state.cards,
        selected: state.tentativeSet
    }
}

export default connect(mapStateToProps)(Board)