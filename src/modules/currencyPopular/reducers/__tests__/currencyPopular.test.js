import currencyPopular  from '../currencyPopular'
import * as ActionTypes from '../../actions'

describe( 'router currencyPopular', () => {
  it( 'returns correct initial state', () => {
    expect( currencyPopular( undefined, {} ) ).toEqual( {} )
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
    }
    const action = {
      type: 'test',
    }
    const nextState = currencyPopular( curState, action )
    expect( nextState ).toBe( curState )
    expect( nextState ).toEqual( curState )
  } )
} )
