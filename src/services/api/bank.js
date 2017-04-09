import { currencies } from '../../../assets/data/currenciesMaster'

import 'isomorphic-fetch'
import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import config from 'config'
import { getBanksSortByCurrency } from 'modules/currencyPopular/selectors'
import { number } from 'services'
import { currency } from 'helpers'

async function callBankApi ( endpoint ) {
  let fullUrl = endpoint.indexOf( config.apiBank.proxy ) === -1
    ? `${ config.apiBank.proxy }/${ endpoint }`
    : endpoint

  if ( __SERVER__ ) {
    fullUrl = endpoint.indexOf( config.apiBank.endpoint ) === -1
      ? `${ config.apiBank.endpoint }/${ endpoint }`
      : endpoint
  }
  return fetch( fullUrl )
    .then( response => response.json().then( json => ( { json, response } ) ) )
    .then( ( { json, response } ) => {
      if ( !response.ok ) {
        return Promise.reject( json )
      }
      return camelizeKeys( json )
    } )
    .then( camelizedJson =>
      camelizedJson.reduce(
        ( p, c ) => {
          const divideCase = c.data.reduce(
            ( p, c ) => {
              if ( c.acronym.indexOf( 'JPY' ) !== -1 ) {
                return currency.currencyDivide( currencies, p, c, 'JPY' )
              } else if ( c.acronym.indexOf( 'KRW' ) !== -1 ) {
                return currency.currencyDivide( currencies, p, c, 'KRW' )
              } else if ( c.acronym.indexOf( 'IDR' ) !== -1 ) {
                return currency.currencyDivide( currencies, p, c, 'IDR' )
              } else if ( c.acronym.indexOf( 'USD' ) !== -1 ) {
                return p
              } else {
                return [
                  ...p,
                  {
                    ...c,
                    extendName: null,
                    currencyDetails: currencies[ c.acronym.substr( 0, 3 ) ],
                    indexGroup: 0,
                    sell: +c.sell,
                    buy: +c.buy,
                  },
                ]
              }
            },
            [],
          )
          const usdCase = c.data
            .filter( e => e.acronym.indexOf( 'USD' ) !== -1 )
            .sort( ( a, b ) => a.sell - b.sell )
            .map( ( e, k ) => ( {
              ...e,
              acronym: `USD${ k + 1 }`,
              extendName: currency.usdExtendName[ k ].text,
              currencyDetails: currencies[ 'USD' ],
              indexGroup: k,
              sell: +e.sell,
              buy: +e.buy,
            } ) )

          return [
            ...p,
            {
              ...c,
              data: [ ...divideCase, ...usdCase ],
              isTotal: true,
              ...[ ...divideCase, ...usdCase ].reduce( (
                p,
                c, // TODO: case usd fix
              ) =>
                c.acronym.indexOf( 'USD' ) === -1
                  ? { ...p, [ c.currencyDetails.code ]: c }
                  : { ...p, [ c.acronym ]: c }, {} ),
            },
          ]
        },
        [],
      ) )
    .then( complutedData => {
      const popularCurrenciesComputed = currency.injectCurrency(
        currency.defaultCurrenciesPopular(),
        'USD',
      )
      const popular = getBanksSortByCurrency(
        {
          entities: { banks: complutedData },
        },
        currencies,
        popularCurrenciesComputed,
      )

      return {
        response: { entities: { banks: popular } },
      }
    } )
    .then(
      response => response,
      error => ( {
        error: error.message || 'Something bad happened.',
      } ),
    )
}

const fetchBanks = () => callBankApi( 'bank' )

export { fetchBanks }
