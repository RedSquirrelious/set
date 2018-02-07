import { dealCards, selectCard, checkSet } from '../../actions/gameActions'

describe('gameActions', () => {
    describe('dealCards', function() {
        const testCards = [
            { testType1: 'differentValue', testType2: 'sameValue' },
            { testType1: 'sameValue', testType2: 'sameValue' }
        ]

        const expectedResult = {
            type: 'DEAL_CARDS',
            cards: testCards
        }

        const result = dealCards(testCards)
        
        it('should return the type, types, and cards', function () {
            expect(result).toEqual(expectedResult)
        })
    })
    describe('selectCard', () => {
        const testCard = {id: 'TEST'}

        const expectedResult = {
            type: 'SELECT_CARD',
            card: {id: 'TEST'}
        }

        const result = selectCard(testCard)

        it('should return the type and card', () => {
            expect(result).toEqual(expectedResult)
        })
    })

    describe('checkSet', function() {
        const tentativeSet = [
            { testType1: 'differentValue', testType2: 'sameValue' },
            { testType1: 'sameValue', testType2: 'sameValue' },
            { testType1: 'sameValue', testType2: 'sameValue' }]
        
        const expectedResult = {
            type: 'CHECK_SET',
            types: ['color', 'shape', 'fill', 'number'],
            cards: tentativeSet
        }

        const result = checkSet(tentativeSet)

        it('should return the type, types, and cards', function() {
            expect(result).toEqual(expectedResult)
        })     
    })
})