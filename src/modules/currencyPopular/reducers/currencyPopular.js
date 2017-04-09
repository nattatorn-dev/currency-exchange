import * as ActionTypes from '../actions'

const initialState = () => ( {} )
export default function currencyPopular ( state = initialState(), action = {} ) {
  switch ( action.type ) {
  case ActionTypes.BANKS.SUCCESS:
    return {
      banks: action.response.entities.banks.reduce(
          ( p, c, k ) => [
            ...p,
            { ...c, data: c.data.slice( 0, 7 ), isTotal: false },
          ],
          [],
        ),
    }
  case ActionTypes.UPDATE_CURRENCY_POPULAR:
    return {
      banks: state.banks.reduce(
          ( p, c, k ) =>
            k === action.index
              ? [ ...p, { ...c, data: action.data, isTotal: !c.isTotal } ]
              : [ ...p, c ],
          [],
        ),
    }
  default:
    return state
  }
}
