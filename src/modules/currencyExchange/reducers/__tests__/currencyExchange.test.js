import currencyExchange from '../currencyExchange'
import * as ActionTypes from '../../actions'

describe( 'router currencyExchange', () => {
  it( 'returns correct initial state', () => {
    expect( currencyExchange( undefined, {} ) ).toEqual( {} )
  } )

  it( 'returns current state if no action matched', () => {
    const curState = {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
      currency: 'USD',
      rate: '100',
    }
    const action = {
      type: 'test',
    }
    const nextState = currencyExchange( curState, action )
    expect( nextState ).toBe( curState )
    expect( nextState ).toEqual( curState )
  } )

  it( 'add currency exchange when receiving ADD_CURRENCY_EXCHANGE action', () => {
    const curState = {}
    const action = {
      type: ActionTypes.ADD_CURRENCY_EXCHANGE,
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
      currency: 'USD',
      rate: '100',
    }
    const nextState = currencyExchange( curState, action )
    const expectedState = {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
      currency: 'USD',
      rate: '100',
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )
} )
