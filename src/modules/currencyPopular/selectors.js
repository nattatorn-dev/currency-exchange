import { createSelector } from 'reselect'
import uniq               from 'lodash/uniq'
import { number }         from 'services'
import { currency }       from 'helpers'

const getBanks = state => state.entities.banks
const getBanksCurrencyPopular = state => state.feature.currencyPopular.banks

const getBanksName = createSelector( getBanks, banks =>
  banks.reduce( ( p, c ) => [ ...p, c.bankNameEng ], [] ) )

const getBanksCurrencies = createSelector( getBanks, banks =>
  banks.reduce(
    ( p, c ) => [
      ...p,
      ...c.data.reduce( ( p, c ) => [ ...p, c.currencyDetails.code ], [] ),
    ],
    [],
  ) )

const getBankscurrenciesUniq = createSelector( getBanksCurrencies, currencies =>
  uniq( currencies ) )

const getBankscurrenciesUniqToObj = createSelector(
  getBankscurrenciesUniq,
  currencies => currencies.map( e => ( { label: e, value: e } ) ),
)

// additional arguments
/**
   * @param  {[object]}      state                        |
                                                            { [
                                                                {
                                                                  bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                                },
                                                                {
                                                                  bankNameEng: 'KrungThai Public Company Limited.'
                                                                }
                                                            ] }
                                                          | example state
   * @param  {[number]}      index                        | 0 | index of banks
   * @return {[object]}      banks                        |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                            },
                                                          | return  bank by index
   */
const getBanksByIndex = ( state, index ) => getBanks( state )[ index ]

/**
   * @param  {[object]}      state                        |
                                                            { [
                                                                {
                                                                  bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                                },
                                                                {
                                                                  bankNameEng: 'KrungThai Public Company Limited.'
                                                                }
                                                            ] }
                                                          | example state
   * @param  {[number]}      index                        | 0 | index of banks
   * @return {[object]}      banks                        |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                            },
                                                          | return  bank by index
   */
const getBankCurrencyPopularByIndex = ( state, index ) =>
  getBanksCurrencyPopular( state )[ index ]

/** TODO: specific function
   * @param  {[object]}      state                        |
                                                            { [
                                                                {
                                                                  bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                                  data: [
                                                                    {
                                                                      acronym: 'JPY',
                                                                      callSell: 1,
                                                                      callBuy: 1
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  bankNameEng: 'KrungThai Public Company Limited.'
                                                                  data: [
                                                                    {
                                                                      acronym: 'JPY',
                                                                      callSell: 999999,
                                                                      callBuy: 1
                                                                    }
                                                                  ]
                                                                }
                                                            ] }
                                                          | example state
  * @param  {[object]}      currencyMaster                |
                                                            {
                                                              JPY: {
                                                                symbol: '¥',
                                                                name: 'Japanese Yen',
                                                                symbol_native: '￥',
                                                                decimal_digits: 0,
                                                                rounding: 0,
                                                                code: 'JPY',
                                                                name_plural: 'Japanese yen',
                                                              },
                                                            }
                                                          | currency master details
   * @param  {[string]}      currencyAcronym              | 'USD' |
   * @param  {[float]}       amountMoney                  | 1000.00 |
   * @return {[object]}      banks                        |
                                                            { [
                                                                {
                                                                  bankNameEng: 'KrungThai Public Company Limited.'
                                                                  data: [
                                                                    {
                                                                      acronym: 'JPY',
                                                                      callSell: 999999,
                                                                      callBuy: 1
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                                  data: [
                                                                    {
                                                                      acronym: 'JPY',
                                                                      callSell: 1,
                                                                      callBuy: 1
                                                                    }
                                                                  ]
                                                                }
                                                            ] }
                                                          | return  bank by index
   */
const getBanksTopRateValue = (
  state,
  currenciesMaster,
  currencyAcronym,
  amountMoney,
) =>
  getBanks( state )
    .reduce(
      ( p, c, k ) => {
        // TODO [code fix]: USD case
        const sortByCalSell = !c[ `${ currencyAcronym }` ] &&
          currencyAcronym !== 'USD'
          ? [ currency.defaultCurrency( currenciesMaster, c, currencyAcronym ) ]
          : c.data
              .filter(
                e =>
                  currencyAcronym
                    .toUpperCase()
                    .indexOf( e.currencyDetails.code ) !== -1 && e.sell !== 0,
              )
              .map( e => ( {
                ...e,
                calSell: number.isNumber( amountMoney / e.sell, 0 ),
                calBuy: number.isNumber( amountMoney / e.buy, 0 ),
              } ) )
              .sort( ( a, b ) => b.calSell - a.calSell )

        const selectFirstSortByCalSell = !c[ `${ currencyAcronym }` ] &&
          currencyAcronym !== 'USD'
          ? currency.defaultCurrency( currenciesMaster, c, currencyAcronym )
          : sortByCalSell[ 0 ]
        return [
          ...p,
          { ...c, data: sortByCalSell, ...selectFirstSortByCalSell },
        ]
      },
      [],
    )
    .sort( ( a, b ) => b.calSell - a.calSell )

/**
  * @param  {[object]}   state                            |
                                                            { [
                                                                {
                                                                  bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                                  data: [
                                                                    {
                                                                      acronym: 'USD'
                                                                    },
                                                                    {
                                                                      acronym: 'JPY'
                                                                    },
                                                                    {
                                                                      acronym: 'GBP'
                                                                    },
                                                                  ]
                                                              }
                                                            ] }
                                                          | example state
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
                                                              },
                                                              GBP: {
                                                                symbol: '£',
                                                                name: 'British Pound Sterling',
                                                                symbol_native: '£',
                                                                decimal_digits: 2,
                                                                rounding: 0,
                                                                code: 'GBP',
                                                                name_plural: 'British pounds sterling',
                                                              }
                                                              JPY: {
                                                                symbol: '¥',
                                                                name: 'Japanese Yen',
                                                                symbol_native: '￥',
                                                                decimal_digits: 0,
                                                                rounding: 0,
                                                                code: 'JPY',
                                                                name_plural: 'Japanese yen',
                                                              },
                                                            }
                                                          | currency master details
   * @param  {[array]}       popularCurrencies            | ['USD', 'GBP'] |
   * @return {[object]}      object                       |
                                                            {
                                                              bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                              data: [
                                                                {
                                                                  acronym: 'USD',
                                                                  currencyDetails: {
                                                                    symbol: '$',
                                                                    name: 'US Dollar',
                                                                    symbol_native: '$',
                                                                    decimal_digits: 2,
                                                                    rounding: 0,
                                                                    code: 'USD',
                                                                    name_plural: 'US dollars',
                                                                  }
                                                                },
                                                                {
                                                                  acronym: 'GBP',
                                                                  currencyDetails: {
                                                                    symbol: '£',
                                                                    name: 'British Pound Sterling',
                                                                    symbol_native: '£',
                                                                    decimal_digits: 2,
                                                                    rounding: 0,
                                                                    code: 'GBP',
                                                                    name_plural: 'British pounds sterling',
                                                                  }
                                                                },
                                                                {
                                                                  acronym: 'JPY',
                                                                  currencyDetails: {
                                                                    symbol: '¥',
                                                                    name: 'Japanese Yen',
                                                                    symbol_native: '￥',
                                                                    decimal_digits: 0,
                                                                    rounding: 0,
                                                                    code: 'JPY',
                                                                    name_plural: 'Japanese yen',
                                                                  }
                                                                },
                                                              ]
                                                            }
                                                          | return banks sorted by popular currencies first
   */
const getBanksSortByCurrency = ( state, currenciesMaster, popularCurrencies ) =>
  getBanks( state ).reduce(
    ( p, c ) => {
      const popularCurrenciesOnBank = popularCurrencies.map(
        ( e, k ) =>
          !c[ e ]
            ? currency.defaultCurrency( currenciesMaster, c, e, k )
            : { ...c[ e ], index: k },
      )

      const currenciesOnBank = c.data.reduce(
        ( p, c, k ) =>
          popularCurrencies.every( e => c.acronym.indexOf( e ) === -1 )
            ? [ ...p, { ...c, index: popularCurrenciesOnBank.length + p.length } ]
            : p,
        [],
      )

      return [
        ...p,
        { ...c, data: [ ...popularCurrenciesOnBank, ...currenciesOnBank ] },
      ]
    },
    [],
  )

/**
   * @param  {[object]}   state                     |
                                                      { [
                                                          {
                                                            bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                            data: [
                                                              {
                                                                acronym: 'USD'
                                                              },
                                                              {
                                                                acronym: 'JPY'
                                                              },
                                                              {
                                                                acronym: 'GBP'
                                                              },
                                                              {
                                                                acronym: 'IDR'
                                                              },
                                                            ]
                                                          }
                                                      ] }
                                                    | example state
   * @param  {[number]}   index                     | 0 | index of banks
   * @param  {[array]}    popularcurrenciesLists    | ['USD', 'JPY', 'GBP'] |
   * @return {[array]}    banks                     |
                                                      {
                                                        bankNameEng: 'The Siam Commercial Bank Public Company Limited.',
                                                        data: [
                                                          {
                                                            acronym: 'USD'
                                                          },
                                                          {
                                                            acronym: 'JPY'
                                                          },
                                                          {
                                                            acronym: 'GBP'
                                                          },
                                                        ]
                                                      }
                                                    | return banks slice by popular currencies
   */
const getBankCurrencyPopularPropsDataByPopular = (
  state,
  index,
  popularcurrenciesLists,
) =>
  getBankCurrencyPopularByIndex( state, index ).data.slice(
    0,
    popularcurrenciesLists.length,
  )

export {
  getBanks,
  getBanksCurrencyPopular,
  getBanksName,
  getBanksCurrencies,
  getBankscurrenciesUniq,
  getBankscurrenciesUniqToObj,
  getBanksByIndex,
  getBankCurrencyPopularByIndex,
  getBanksTopRateValue,
  getBanksSortByCurrency,
  getBankCurrencyPopularPropsDataByPopular,
}
