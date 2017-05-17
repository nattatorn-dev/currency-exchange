import { RESET_ERROR_MESSAGE } from '../actions'

const initialState = () => null

export default function errorMessage ( state = initialState(), action = {} ) {
  const { type, error } = action

  if ( type === RESET_ERROR_MESSAGE ) {
    return initialState()
  } else if ( error ) {
    return action.error
  }

  return state
}
