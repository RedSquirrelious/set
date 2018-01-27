import reducer, { updateCards, checkSetByType, checkSetOverall, updatePoints } from '../../reducers/gameReducer'
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

    describe('checkSetByType', function() {
        describe('when three cards make a set', function() {
            describe('when the set has all different values for a type', function () {
                const tentativeSet = [{ testType: 'sameValue' }, { testType: 'differentValue' }, { testType: 'value3' }]
                const type = 'testType'

                const result = checkSetByType(tentativeSet, type)
                it('should return a value of 1', function () {
                    expect(result).toEqual(1)
                })
            })

            describe('when the set is all the same value for a type', function () {
                const tentativeSet = [{ testType: 'sameValue' }, { testType: 'sameValue' }, { testType: 'sameValue' }]
                const type = 'testType'

                const result = checkSetByType(tentativeSet, type)
                it('should return a value of 1', function () {
                    expect(result).toEqual(1)
                })
            })

        })

        describe('when three cards do not make a set', function() {
            describe('when only two cards in the set have the same value for a type', function () {
                const tentativeSet = [{ testType: 'sameValue' }, { testType: 'sameValue' }, { testType: 'value3' }]
                const type = 'testType'

                const result = checkSetByType(tentativeSet, type)
                it('should return a value of 10', function () {
                    expect(result).toEqual(10)
                })
            })
        })
    })

    describe('checkSetOverall', function() {
        describe('when there is a set for all types', function() {
            const tentativeSet = [{ testType1: 'sameValue', testType2: 'sameValue' }, { testType1: 'sameValue', testType2: 'sameValue' }, { testType1: 'sameValue', testType2: 'sameValue' }]
            const types = ['testType1', 'testType2']

            const result = checkSetOverall(tentativeSet, types)
            it('should return true', function() {
                expect(result).toEqual(true)
            })
        })

        describe('when there is not a set for all types', function () {
            const tentativeSet = [
                { testType1: 'differentValue', testType2: 'sameValue' }, 
                { testType1: 'sameValue', testType2: 'sameValue' }, 
                { testType1: 'sameValue', testType2: 'sameValue' }]
            const types = ['testType1', 'testType2']

            const result = checkSetOverall(tentativeSet, types)
            it('should return false', function () {
                expect(result).toEqual(false)
            })
        })
    })

    describe('updatePoints', function() {
        describe('when you have a set', function() {
            it('should add 1 point', function() {
                const isSet = true
                const points = 0

                const result = updatePoints(isSet, points)

                expect(result).toEqual(1)
            })
        })

        describe('when you do not have a set', function () {
            it('should add 0 points', function () {
                const isSet = false
                const points = 0

                const result = updatePoints(isSet, points)

                expect(result).toEqual(0)
            })
        })
    })

})