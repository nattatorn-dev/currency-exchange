import * as ActionTypes from '../actions'

describe( 'app action', () => {
  it( 'creates NAVIGATE action', () => {
    const expectedAction = {
      type: ActionTypes.NAVIGATE,
    }
    expect( ActionTypes.navigate() ).toEqual( expectedAction )
  } )

  it( 'creates UPDATE_ROUTER_STATE action', () => {
    const state = '/USD'
    const expectedAction = {
      type: ActionTypes.UPDATE_ROUTER_STATE,
      state,
    }
    expect( ActionTypes.updateRouterState( state ) ).toEqual( expectedAction )
  } )

  it( 'creates RESET_ERROR_MESSAGE action', () => {
    const expectedAction = {
      type: ActionTypes.RESET_ERROR_MESSAGE,
    }
    expect( ActionTypes.resetErrorMessage() ).toEqual( expectedAction )
  } )

  it( 'creates UPDATE_SETTING action', () => {
    const setting = {}
    const expectedAction = {
      type: ActionTypes.UPDATE_SETTING,
      setting,
    }
    expect( ActionTypes.updateSetting( setting ) ).toEqual( expectedAction )
  } )

  it( 'creates RESET_SETTING action', () => {
    const expectedAction = {
      type: ActionTypes.RESET_SETTING,
    }
    expect( ActionTypes.resetSetting() ).toEqual( expectedAction )
  } )

  it( 'creates UPDATE_CONTROLLER action', () => {
    const controller = {}
    const expectedAction = {
      type: ActionTypes.UPDATE_CONTROLLER,
      controller,
    }
    expect( ActionTypes.updateController( controller ) ).toEqual( expectedAction )
  } )

  it( 'creates RESET_CONTROLLER action', () => {
    const expectedAction = {
      type: ActionTypes.RESET_CONTROLLER,
    }
    expect( ActionTypes.resetController() ).toEqual( expectedAction )
  } )
} )
