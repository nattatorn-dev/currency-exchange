import { array, number } from 'services'

const defaultCurrenciesPopular = () => [ 'USD', 'GBP', 'EUR', 'JPY', 'CNY' ]
const usdExtend = [ 'USD1', 'USD2', 'USD3' ]
const usdExtendName = [ { text: '1-2' }, { text: '5-20' }, { text: '50-100' } ]

/**
  * @param  {[object]}      currencyMaster                |
                                                            {
                                                              USD: {
                                                                symbol: '$',
                                                                name: 'US Dollar',
                                                                symbol_native: '$',
                                                                decimal_digits: 2,
                                                                rounding: 0,
                                                                code: 'USD',
                                                                name_plural: 'US dollars',
                                                              }
                                                            }
                                                          | currency master details
   * @param  {[string]}      bankNameEng, bankNameThai    | ธนาคารไทยพาณิชย์, The Siam Commercial Bank Public Company Limited. |
   * @param  {[string]}      currencyAcronym              | 'USD' |
   * @param  {[number]}      index                        | 99 |
   * @return {[object]}      bank                         |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                              bankNameThai: 'ธนาคารไทยพาณิชย์',
                                                              sell: 0,
                                                              buy: 0,
                                                              calSell: 0,
                                                              calBuy: 0,
                                                              extendName: null,
                                                              currencyDetails: {
                                                                symbol: '$',
                                                                name: 'US Dollar',
                                                                symbol_native: '$',
                                                                decimal_digits: 2,
                                                                rounding: 0,
                                                                code: 'USD',
                                                                name_plural: 'US dollars',
                                                              },
                                                              indexGroup: 0,
                                                              index: 99,
                                                            }
                                                          | return default currency
   */
const defaultCurrency = (
  currencyMaster,
  { bankNameEng, bankNameThai },
  currencyAcronym,
  index = 0,
) => ( {
  bankNameEng: bankNameEng,
  bankNameThai: bankNameThai,
  sell: 0,
  buy: 0,
  calSell: 0,
  calBuy: 0,
  extendName: null,
  currencyDetails: currencyMaster[ currencyAcronym.slice( 0, 3 ) ],
  indexGroup: 0,
  index: index,
} )

/** specific function
  * @param   {[object]}     currencyMaster               |
                                                            {
                                                              USD: {
                                                                symbol: '$',
                                                                name: 'US Dollar',
                                                                symbol_native: '$',
                                                                decimal_digits: 2,
                                                                rounding: 0,
                                                                code: 'USD',
                                                                name_plural: 'US dollars',
                                                              }
                                                            }
                                                          | currency master details
   * @param   {[object]}     bank                         |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.'
                                                              bankNameThai: 'ธนาคารไทยพาณิชย์'}
                                                              data: [Array<any>]
                                                            }
                                                          | bank details
   * @param   {[object]}     currency                     |
                                                            {
                                                              acronym: 'USD1'
                                                              buy: '33.19'
                                                              currencyDetails: {Object<any>}
                                                              extendName: '1-2'
                                                              fullname: 'US DOLLAR $1-$2'
                                                              index: 0
                                                              indexGroup: 0
                                                              sell: '34.64'
                                                            }
                                                          | currency details
   * @param   {[string]}      currencyAcronym             | 'USD' |
   * @return  {[object]}      bank                        |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.'
                                                              bankNameThai: 'ธนาคารไทยพาณิชย์'}
                                                              data: [
                                                                {
                                                                  acronym: 'USD1'
                                                                  buy: '33.19'
                                                                  currencyDetails: {
                                                                    symbol: '$',
                                                                    name: 'US Dollar',
                                                                    symbol_native: '$',
                                                                    decimal_digits: 2,
                                                                    rounding: 0,
                                                                    code: 'USD',
                                                                    name_plural: 'US dollars',
                                                                  }
                                                                  extendName: '1-2'
                                                                  fullname: 'US DOLLAR $1-$2'
                                                                  index: 0
                                                                  indexGroup: 0
                                                                  sell: '34.64'
                                                                }
                                                              ]
                                                            }
                                                          | return bank detail
*/
const currencyDivide = ( currencyMaster, bank, currency, currencyAcronym ) =>
  currency.sell > 1
    ? [
      ...bank,
      {
        ...currency,
        buy: number.mathRound( currency.buy / 100, 5 ),
        sell: number.mathRound( currency.sell / 100, 5 ),
        extendName: null,
        currencyDetails: currencyMaster[ currencyAcronym ],
        indexGroup: 0,
      },
    ]
    : [
      ...bank,
      {
        ...currency,
        extendName: null,
        currencyDetails: currencyMaster[ currencyAcronym ],
        indexGroup: 0,
      },
    ]

/** specific function
 * @param  {[array]}    currencies      | ['USD', 'JPY', 'GBP'] |
 * @param  {[string]}   find            | 'USD' |
 * @return {[array]}    currencies      | ['USD1', 'USD2', 'USD3', 'JPY', 'GBP'] | inject currency
 */
const injectCurrency = ( currencies, find ) =>
  array.findAndReplace( currencies, find, usdExtend )

export {
  currencyDivide,
  defaultCurrenciesPopular,
  defaultCurrency,
  injectCurrency,
  usdExtend,
  usdExtendName,
}
