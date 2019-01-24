import reducer, { updateOnBoardAfterSet, moveCardsFromInDeckToOnBoard, unselectCards } from '../../reducers/cardsReducer'

describe('cardsReducer', () => {
    describe('DEAL_CARDS', () => {
        const testAction = {
            type: 'DEAL_CARDS',
            cards: [{ id: 'TEST' }, { id: 'TEST0' }, { id: 'TEST1' }, { id: 'TEST2' }],
            number: 2
        }
        const testState = {
            onBoard: [],
            played: [],
            inDeck: [],
            possibleSet: []
        }

        let result = reducer(testState, testAction)

        it('should put some items on board and leave rest in deck', () => {
            expect(result.onBoard).toEqual([{ id: 'TEST' },  { id: 'TEST0' }])
            expect(result.possibleSet).toEqual([])
            expect(result.inDeck).toEqual([{ id: 'TEST1' }, { id: 'TEST2' }])
        })
    })

    describe('SELECT_CARD first selection', ()=> {
        const testAction = {
            type: 'SELECT_CARD',
            card: { id: 'TEST' }
        }
        const testState = {
            onBoard: [{ id: 'TEST' }],
            played: [],
            inDeck: [],
            possibleSet: []
        }

        let result = reducer(testState, testAction)

        it('should return updated state', () => {
            expect(result.onBoard).toEqual([{ id: 'TEST', selected: true }])
            expect(result.possibleSet).toEqual([{ id: 'TEST', selected: true }])
            expect(result.inDeck).toEqual([])
        })
    })

    describe('moveCardsFromInDeckToOnBoard more than 3 cards in deck', () => {
        const cards = {
            onBoard: [],
            played: [],
            inDeck:   [{ id: 'TEST' }, { id: 'TEST0' }, { id: 'TEST1' }, { id: 'TEST2' }],
            possibleSet: []
        }

        let result = moveCardsFromInDeckToOnBoard(cards)

        it('should return updated state', () => {
            expect(result.onBoard.length).toEqual(3)
            expect(result.inDeck.length).toEqual(1)
        })
    })

    describe('moveCardsFromInDeckToOnBoard less than 3 cards in deck', () => {
        const cards = {
            onBoard: [],
            played: [],
            inDeck:   [{ id: 'TEST' }, { id: 'TEST0' }],
            possibleSet: []
        }

        let result = moveCardsFromInDeckToOnBoard(cards)

        it('should return updated state', () => {
            expect(result.onBoard.length).toEqual(2)
            expect(result.inDeck.length).toEqual(0)
        })
    })

    describe('updateOnBoardAfterSet', () => {
        const cardsOnBoard = [{ id: 'TEST', selected: true }, { id: 'TEST0', selected: false }]

        const result = updateOnBoardAfterSet(cardsOnBoard)

        it('should return only cards that are not selected', () => {
            expect(cardsOnBoard.length).toEqual(2)
            expect(result.length).toEqual(1)
        })
    })

    describe('unselectCards', () => {
        const cardsOnBoard = [{ id: 'TEST', selected: true }, { id: 'TEST0', selected: false }]
        const selectedCards = [{ id: 'TEST', selected: true }]

        const result = unselectCards(cardsOnBoard, selectedCards)

        it('should should change selected values to false', () => {
            expect(result[0].id).toEqual('TEST')
            expect(result[0].selected).toEqual(false)
            expect(result[1].id).toEqual('TEST0')
            expect(result[1].selected).toEqual(false)
        })
    })

})