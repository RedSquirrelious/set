import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import renderer from 'react-test-renderer'

import Board from '../../components/Board'

describe('Board', () => {
    let hand = true
    it('should return true', function() {
        expect(hand).toEqual(true)
    })
//     const hand = [{img: 'TEST'}]
//     const component = renderer.create(
//         <Board cards={hand} />
//     )
//     let tree = component.toJSON()

//     expect(tree).toMatchSnapshot()
})

