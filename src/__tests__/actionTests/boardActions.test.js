import { selectCard } from '../../actions/boardActions'

describe('boardActions', () => {
    describe('selectCard', () => {
        const testCard = {img: 'TEST'}

        const expectedResult = {
            type: 'SELECT_CARD',
            card: {img: 'TEST'}
        }

        const result = selectCard(testCard)

        it('should return the type and card', () => {
            expect(result).toEqual(expectedResult)
        })
    })
})