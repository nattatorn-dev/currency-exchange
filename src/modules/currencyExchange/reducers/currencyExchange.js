import * as ActionTypes from '../actions'

const initialState = () => ( {} )
export default function currencyExchange ( state = initialState(), action = {} ) {
  switch ( action.type ) {
  case ActionTypes.ADD_CURRENCY_EXCHANGE:
    return {
      banks: action.banks,
      currency: action.currency,
      rate: action.rate,
    }
  default:
    return state
  }
}
