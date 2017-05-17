import moment                 from 'moment'
import {
  UPDATE_SETTING,
  RESET_SETTING,
  UPDATE_CONTROLLER,
  RESET_CONTROLLER,
  UPDATE_DELAY_BY_NAME,
  RESET_DELAY_BY_NAME,
  RESET_DELAY,
} from '../actions'
import { reducer }             from 'helpers'
import { setting, controller } from '../../../constants'

const initialState = () => ( {
  setting,
  controller,
  date: moment().startOf( 'day' ).toISOString(),
  delay: {
    fetchBanks: 60,
  },
} )

const handlers = {
  [ UPDATE_SETTING ]: ( state, action ) => ( {
    ...state,
    setting: action.setting,
  } ),
  [ RESET_SETTING ]: state => ( {
    ...state,
    setting: initialState().setting,
  } ),
  [ UPDATE_CONTROLLER ]: ( state, action ) => ( {
    ...state,
    controller: action.controller,
  } ),
  [ RESET_CONTROLLER ]: state => ( {
    ...state,
    controller: initialState().controller,
  } ),
  [ UPDATE_DELAY_BY_NAME ]: ( state, action ) => ( {
    ...state,
    delay: { [ action.name ]: action.millisecond },
  } ),
  [ RESET_DELAY_BY_NAME ]: ( state, action ) => ( {
    ...state,
    delay: { [ action.name ]: initialState().delay[ action.name ] },
  } ),
  [ RESET_DELAY ]: state => ( { ...state, delay: initialState().delay } ),
}

export default function app ( state = initialState(), action = {} ) {
  return reducer.CreateHanderReducer( state, action, handlers )
}
