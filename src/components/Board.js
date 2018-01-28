import React from 'react'
import { connect } from 'react-redux'
import GridList, { GridListTile } from 'material-ui/GridList'
import { withTheme } from 'material-ui/styles'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'

// const Board = (props) => {
class Board extends React.Component {
    render() {
        const { cards, dispatch, onClick, theme } = this.props
        if (cards && cards.onBoard && cards.onBoard.length > 0) {
            const deck = cards.onBoard
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
                                    onClick(selectedCard.target)}
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
}

const styles = theme => ({
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
        
    },

})

const holdStyles = () => {
   const styles = {  
       image: {
        position: 'relative',
        width: 175,
        height: 175,
        // height: 200,
        // [theme.breakpoints.down('xs')]: {
        //     width: '100% !important', // Overrides inline-style
        //     height: 100,
        // },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        // transition: theme.transitions.create('opacity'),
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        // transition: theme.transitions.create('opacity'),
    }}
    return (<ButtonBase
        key={card.id}
        onClick={(selectedCard) => {
            onClick(selectedCard.target)
        }
        }
    // className={styles.image}
    >
        {/* <span className={styles.imageBackdrop} /> */})
        </ButtonBase>
    )
}



const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        dealt: state.dealt,
        cards: state.cards,
    }
}

export default connect(mapStateToProps)(Board)