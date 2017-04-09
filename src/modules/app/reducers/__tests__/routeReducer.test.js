import router from '../router'
import * as ActionTypes from '../../actions'

describe( 'router reducer', () => {
  it( 'returns correct initial state', () => {
    expect( router( undefined, {} ) ).toEqual( { pathname: '/' } )
  } )

  it( 'returns current state if no action matched', () => {
    const curState = { pathname: '/' }
    const action = {
      type: 'test',
    }
    const nextState = router( curState, action )
    expect( nextState ).toBe( curState )
    expect( nextState ).toEqual( curState )
  } )

  it( 'update router when receiving UPDATE_ROUTER_STATE action', () => {
    const curState = { pathname: '/' }
    const action = {
      type: ActionTypes.UPDATE_ROUTER_STATE,
      state: { pathname: '/USD' },
    }
    const nextState = router( curState, action )
    const expectedState = { pathname: '/USD' }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )
} )
