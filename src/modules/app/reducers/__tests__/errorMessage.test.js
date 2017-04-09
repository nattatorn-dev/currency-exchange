import errorMessage from '../errorMessage'
import * as ActionTypes from '../../actions'

describe( 'errorMessage reducer', () => {
  it( 'returns correct initial state', () => {
    expect( errorMessage( undefined, {} ) ).toEqual( null )
  } )

  it( 'returns current state if no action matched', () => {
    const curState = null
    const action = {
      type: 'test',
    }
    const nextState = errorMessage( curState, action )
    expect( nextState ).toBe( curState )
    expect( nextState ).toEqual( curState )
  } )

  it( 'reset error message when receiving RESET_ERROR_MESSAGE action', () => {
    const curState = { error: 'some error' }
    const action = {
      type: ActionTypes.RESET_ERROR_MESSAGE,
    }
    const nextState = errorMessage( curState, action )
    const expectedState = null
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'catch error message when receiving error', () => {
    const curState = null
    const action = {
      error: 'something went wrong',
    }
    const nextState = errorMessage( curState, action )
    const expectedState = 'something went wrong'
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )
} )
