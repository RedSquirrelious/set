import reducer, { updateCards } from '../../reducers/boardReducer'
import defaultState from '../../defaults'

describe('boardReducer', () => {

    describe('updateCards', () => {
        describe('when everything has the needed value', () => {
            it('should add the card to the played pile', () => {
                const testAction = {
                    card: { img: 'TEST' }
                }
                const testState = {
                    onBoard: [],
                    played: [],
                    inDeck: []
                }

                expect(updateCards(testState, testAction.card).played).toEqual([{ img: 'TEST' }])
            })

            it('should remove the played card from the board', () => {
                const testAction = {
                    card: { img: 'TEST' }
                }
                const testState = {
                    onBoard: [{ img: 'TEST' }],
                    played: [],
                    inDeck: [{ img: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).onBoard).not.toContain([{ img: 'TEST' }])
            })

            it('should put a new card on the board', () => {
                const testAction = {
                    card: { img: 'TEST' }
                }
                const testState = {
                    onBoard: [{ img: 'TEST' }],
                    played: [],
                    inDeck: [{ img: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).onBoard).toEqual([{ img: 'NEW_CARD' }])
            })

            it('should remove a card from the deck', () => {
                const testAction = {
                    card: { img: 'TEST' }
                }
                const testState = {
                    onBoard: [{ img: 'TEST' }],
                    played: [],
                    inDeck: [{ img: 'NEW_CARD' }]
                }

                expect(updateCards(testState, testAction.card).inDeck).not.toContain([{ img: 'NEW_CARD' }])
            })
        })

        describe('when there are no more cards in the deck', () => {
            const testAction = {
                card: { img: 'TEST' }
            }
            const testState = {
                onBoard: [{ img: 'TEST' }],
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
            card: { img: 'TEST' }
        }
        const testState = {
            onBoard: [{ img: 'TEST' }],
            played: [],
            inDeck: []
        }

        it('should return updated state', () => {
            expect(reducer(testState, testAction).onBoard).toEqual([])
            expect(reducer(testState, testAction).played).toEqual([{ img: 'TEST' }])
            expect(reducer(testState, testAction).inDeck).toEqual([])
        })
    })

})