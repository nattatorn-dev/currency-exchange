import * as ActionTypes from '../actions'

describe( 'currency popular action', () => {
  it( 'creates BANKS_REQUES action', () => {
    const expectedAction = {
      type: ActionTypes.BANKS.REQUEST,
    }
    expect( ActionTypes.banks.request() ).toEqual( expectedAction )
  } )

  it( 'creates BANKS_SUCCESS action', () => {
    const response = {}
    const expectedAction = {
      type: ActionTypes.BANKS.SUCCESS,
      response,
    }
    expect( ActionTypes.banks.success( response ) ).toEqual( expectedAction )
  } )

  it( 'creates BANKS_FAILURE action', () => {
    const error = {}
    const expectedAction = {
      type: ActionTypes.BANKS.FAILURE,
      error,
    }
    expect( ActionTypes.banks.failure( error ) ).toEqual( expectedAction )
  } )

  it( 'creates BANKS_REQUES action', () => {
    const expectedAction = {
      type: ActionTypes.BANKS.REQUEST,
    }
    expect( ActionTypes.banks.request() ).toEqual( expectedAction )
  } )

  it( 'creates LOAD_CURRENCY_POPULAR_PAGE action', () => {
    const login = 0
    const requiredFields = []
    const expectedAction = {
      type: ActionTypes.LOAD_CURRENCY_POPULAR_PAGE,
      login,
      requiredFields,
    }
    expect( ActionTypes.loadCurrencyPopularPage( login ) ).toEqual( expectedAction )
    expect( ActionTypes.loadCurrencyPopularPage( login, requiredFields ) ).toEqual(
      expectedAction,
    )
  } )

  it( 'creates UPDATE_CURRENCY_POPULAR action', () => {
    const index = 0
    const data = []
    const expectedAction = {
      type: ActionTypes.UPDATE_CURRENCY_POPULAR,
      index,
      data,
    }
    expect( ActionTypes.updateCurrencyPopular( index, data ) ).toEqual(
      expectedAction,
    )
  } )

  it( 'creates TOGGLE_SHOW_CURRENCY_POPULAR action', () => {
    const index = 0
    const expectedAction = {
      type: ActionTypes.TOGGLE_SHOW_CURRENCY_POPULAR,
      index,
    }
    expect( ActionTypes.toggleShowCurrencyPopular( index ) ).toEqual(
      expectedAction,
    )
  } )
} )
