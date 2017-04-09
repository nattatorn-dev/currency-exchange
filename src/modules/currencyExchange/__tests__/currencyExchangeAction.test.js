import * as ActionTypes from '../actions'

describe( 'currency exchange LOAD_CURRENCY_EXCHANGE', () => {
  it( 'creates LOAD_CURRENCY_EXCHANGE action', () => {
    const login = ''
    const name = ''
    const requiredFields = []
    const expectedAction = {
      type: ActionTypes.LOAD_CURRENCY_EXCHANGE,
      login,
      name,
      requiredFields,
    }
    expect( ActionTypes.loadCurrencyExchange( login, name ) ).toEqual(
      expectedAction,
    )
    expect(
      ActionTypes.loadCurrencyExchange( login, name, requiredFields ),
    ).toEqual( expectedAction )
  } )

  it( 'creates ADD_CURRENCY_EXCHANGE action', () => {
    const currency = ''
    const rate = ''
    const banks = []
    const expectedAction = {
      type: ActionTypes.ADD_CURRENCY_EXCHANGE,
      currency,
      rate,
      banks,
    }
    expect( ActionTypes.addCurrencyExchange( currency, rate, banks ) ).toEqual(
      expectedAction,
    )
  } )
} )
