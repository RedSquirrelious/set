import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import FlatButton from 'material-ui/FlatButton'

import Card from './Card'

const Board = (props) => (
    <div style={styles.root}>
        <GridList
            cols={6}
            cellHeight={200}
            style={styles.gridList}
        >
            {props.cards.map((card) => (
                <GridTile
                    key={card.img}
                    actionIcon={<FlatButton></FlatButton>}
                >
                    <img src={card.img}
                         style={styles.gridTile}
                    />
                </GridTile>
            ))}
        </GridList>
    </div>
)

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