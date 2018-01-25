import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'
import ButtonBase from 'material-ui/ButtonBase'

const BoardGridButton = (props) => {
    return renderGrid(props)
}

const renderGrid = (props) => {
    const styles = gridStyles
    const deck = props.cards
    return (
        <div style={styles.root}>
            <GridList
                cols={6}
                cellHeight={200}
                style={styles.gridList}>
                {props.cards.map(tile => (
                    <ButtonBase
                        key={tile.key}
                        onClick={() => props.onClick(tile)}
                    >
                        <GridListTile key={tile.key} cols={1}>
                            <img
                                src={tile.url}
                                alt={tile.key}
                                style={styles.gridTile} />
                        </GridListTile>
                    </ButtonBase>
                )
                )}
            </GridList>
        </div>
    )
}

const gridStyles = {
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
}

export default BoardGridButton