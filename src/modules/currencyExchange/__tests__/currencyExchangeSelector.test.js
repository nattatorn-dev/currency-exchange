import * as selectors from '../selectors'

describe( 'currency exchange selector', () => {
  it( 'selects bank currency exchange', () => {
    const state = {
      feature: {
        currencyExchange: {
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
        },
      },
    }
    expect( selectors.getBankCurrencyExchange( state ) ).toEqual( [
      {
        bankNameThai: 'ธนาคารไทยพาณิชย์',
        bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
        data: [],
        isTotal: true,
      },
    ] )
  } )
} )
