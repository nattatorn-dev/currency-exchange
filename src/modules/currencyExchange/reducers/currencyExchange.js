import { ADD_CURRENCY_EXCHANGE } from '../actions'
import { reducer }               from 'helpers'

const initialState = () => ( {} )

const handlers = {
  [ ADD_CURRENCY_EXCHANGE ]: ( state, action ) => ( {
    banks: action.banks,
    currency: action.currency,
    rate: action.rate,
  } ),
}

export default function currencyExchange ( state = initialState(), action = {} ) {
  return reducer.CreateHanderReducer( state, action, handlers )
}
