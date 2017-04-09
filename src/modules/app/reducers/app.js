import moment from 'moment'
import * as ActionTypes from '../actions'
import { setting, controller } from '../../../constants'

const initialState = () => ( {
  setting,
  controller,
  date: moment().startOf( 'day' ).toISOString(),
} )

export default function app ( state = initialState(), action = {} ) {
  switch ( action.type ) {
  case ActionTypes.UPDATE_SETTING:
    return { ...state, setting: action.setting }
  case ActionTypes.RESET_SETTING:
    return { ...state, setting: initialState().setting }
  case ActionTypes.UPDATE_CONTROLLER:
    return { ...state, controller: action.controller }
  case ActionTypes.RESET_CONTROLLER:
    return { ...state, controller: initialState().controller }
  default:
    return state
  }
}
