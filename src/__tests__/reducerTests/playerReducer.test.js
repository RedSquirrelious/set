import reducer from '../../reducers/playerReducer'
import { RESET_SCORE, SET_YES_SET } from '../../actions/gameActions'

describe('playerReducer', () => {
    describe('RESET_SCORE', () => {
        const testAction = {
            type: RESET_SCORE
        }
        const testState = {
            score: 10
        }

        const result = reducer(testState, testAction)

        it('should set the score to 0', () => {
            expect(result.score).toEqual(0)
        })
    })

    describe('SET_YES_SET', () => {
        const testAction = {
            type: SET_YES_SET
        }
        const testState = {
            score: 0
        }

        const result = reducer(testState, testAction)

        it('should increment the score by 1', () => {
            expect(result.score).toEqual(1)
        })
    })
})