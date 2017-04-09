import { action } from 'services/action'

const LOAD_CURRENCY_EXCHANGE = 'LOAD_CURRENCY_EXCHANGE'
const ADD_CURRENCY_EXCHANGE = 'ADD_CURRENCY_EXCHANGE'

const loadCurrencyExchange = ( login, name, requiredFields = [] ) =>
  action( LOAD_CURRENCY_EXCHANGE, { login, name, requiredFields } )
const addCurrencyExchange = ( currency, rate, banks ) =>
  action( ADD_CURRENCY_EXCHANGE, { currency, rate, banks } )

export {
  LOAD_CURRENCY_EXCHANGE,
  ADD_CURRENCY_EXCHANGE,
  loadCurrencyExchange,
  addCurrencyExchange,
}
