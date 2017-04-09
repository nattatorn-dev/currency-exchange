import entities from '../entities'
import * as ActionTypes from '../../actions'

describe( 'entities reducer', () => {
  it( 'returns correct initial state', () => {
    expect( entities( undefined, {} ) ).toEqual( { banks: [] } )
  } )

  it( 'returns current state if no action matched', () => {
    const curState = { banks: [] }
    const action = {
      type: 'test',
    }
    const nextState = entities( curState, action )
    expect( nextState ).toBe( curState )
    expect( nextState ).toEqual( curState )
  } )

  it( 'add entities when receiving data after fecthed', () => {
    const curState = { banks: [] }
    const action = {
      response: {
        entities: {
          banks: [
            {
              bankNameThai: 'ธนาคารไทยพาณิชย์',
              bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
              data: [],
              isTotal: true,
            },
          ],
        },
      },
    }
    const nextState = entities( curState, action )
    const expectedState = {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'merge (not duplicate) entities when receiving data after fecthed', () => {
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
      response: {
        entities: {
          currencies: [ 'USD' ],
        },
      },
    }
    const nextState = entities( curState, action )
    const expectedState = {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
      currencies: [ 'USD' ],
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'merge (duplicate) entities when receiving data after fecthed', () => {
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
      response: {
        entities: {
          banks: [],
        },
      },
    }
    const nextState = entities( curState, action )
    const expectedState = {
      banks: [
        {
          bankNameThai: 'ธนาคารไทยพาณิชย์',
          bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
          data: [],
          isTotal: true,
        },
      ],
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )
} )
