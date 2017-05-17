import { BANKS, UPDATE_CURRENCY_POPULAR } from '../actions'
import { reducer } from 'helpers'

const initialState = () => ( {} )

const handlers = {
  [ BANKS.SUCCESS ]: ( state, action ) => ( {
    banks: action.response.entities.banks.reduce(
      ( p, c, k ) => [ ...p, { ...c, data: c.data.slice( 0, 7 ), isTotal: false } ],
      []
    ),
  } ),
  [ UPDATE_CURRENCY_POPULAR ]: ( state, action ) => ( {
    banks: state.banks.reduce(
      ( p, c, k ) =>
        k === action.index
          ? [ ...p, { ...c, data: action.data, isTotal: !c.isTotal } ]
          : [ ...p, c ],
      []
    ),
  } ),
}

export default function currencyPopular ( state = initialState(), action = {} ) {
  return reducer.CreateHanderReducer( state, action, handlers )
}
