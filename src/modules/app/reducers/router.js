import * as ActionTypes from '../actions'

const initialState = () => ( {
  pathname: '/',
} )

export default function router ( state = initialState(), action = {} ) {
  switch ( action.type ) {
  case ActionTypes.UPDATE_ROUTER_STATE:
    return action.state
  default:
    return state
  }
}
