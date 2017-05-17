import { UPDATE_ROUTER_STATE } from '../actions'
import { reducer } from 'helpers'

const initialState = () => ( {
  pathname: '/',
} )

const handlers = {
  [ UPDATE_ROUTER_STATE ]: ( state, action ) => action.state,
}

export default function router ( state = initialState(), action = {} ) {
  return reducer.CreateHanderReducer( state, action, handlers )
}
