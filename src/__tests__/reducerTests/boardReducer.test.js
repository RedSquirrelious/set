import reducer, { updateCards } from '../../reducers/tableReducer'
import defaultState from '../../defaults'

describe('boardReducer', () => {

    describe('updateCards', () => {
        describe('when everything has the needed value', () => {
            it('should add the card to the played pile', () => {
                const testAction = {
                    card: { id: 'TEST' }
                }
                const testState = {
                    onBoard: [],
                    played: [],
                    inDeck: []
                }

                expect(updateCards(testState, testAction.card).played).toEqual([{ id: 'TEST' }])
            })

            it('should remove the played card from the board', () => {
                const testAction = {
                    card: { id: 'TEST' }
                }
                const testState = {
                    onBoard: [{ id: 'TEST' }],
                    played: [],
                    inDeck: [{ id: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).onBoard).not.toContain([{ id: 'TEST' }])
            })

            it('should put a new card on the board', () => {
                const testAction = {
                    card: { id: 'TEST' }
                }
                const testState = {
                    onBoard: [{ id: 'TEST' }],
                    played: [],
                    inDeck: [{ id: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).onBoard).toEqual([{ id: 'NEW_CARD' }])
            })

            it('should remove a card from the deck', () => {
                const testAction = {
                    card: { id: 'TEST' }
                }
                const testState = {
                    onBoard: [{ id: 'TEST' }],
                    played: [],
                    inDeck: [{ id: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).inDeck).not.toContain([{ id: 'NEW_CARD' }])
            })
        })

        describe('when there are no more cards in the deck', () => {
            const testAction = {
                card: { id: 'TEST' }
            }
            const testState = {
                onBoard: [{ id: 'TEST' }],
                played: [],
                inDeck: []
            }

            it('should not put anything else on the board', () => {
                expect(updateCards(testState, testAction.card).onBoard).toEqual([])
            })
        })
    })

    describe('SELECT_CARD', ()=> {
        const testAction = {
            type: 'SELECT_CARD',
            card: { id: 'TEST' }
        }
        const testState = {
            cards: {
                onBoard: [{ id: 'TEST' }],
                played: [],
                inDeck: []
            }
        }

        let result = reducer(testState, testAction)
        console.log(result)
        it('should return updated state', () => {
            expect(reducer(testState, testAction).cards.onBoard).toEqual([])
            expect(reducer(testState, testAction).cards.played).toEqual([{ id: 'TEST' }])
            expect(reducer(testState, testAction).cards.inDeck).toEqual([])
        })
    })

})