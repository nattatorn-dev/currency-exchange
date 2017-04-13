import moment from 'moment'
import app from '../app'
import * as ActionTypes from '../../actions'
import { setting, controller } from '../../../../constants'

describe( 'app reducer', () => {
  it( 'returns correct initial state', () => {
    expect( app( undefined, {} ) ).toEqual( {
      setting,
      controller,
      date: moment().startOf( 'day' ).toISOString(),
      delay: {
        fetchBanks: 60,
      },
    } )
  } )

  it( 'returns current state if no action matched', () => {
    const curState = { setting }
    const action = {
      type: 'test',
    }
    const nextState = app( curState, action )
    expect( nextState ).toBe( curState ) // compare pointers
    expect( nextState ).toEqual( curState ) // compare values
  } )

  it( 'update setting when receiving UPDATE_SETTING action', () => {
    const curState = { setting, controller }
    const action = {
      type: ActionTypes.UPDATE_SETTING,
      setting: { ...setting, lang: 'en' },
    }
    const nextState = app( curState, action )
    const expectedState = { setting: { ...setting, lang: 'en' }, controller }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'reset setting when receiving RESET_SETTING action', () => {
    const curState = { setting: { ...setting, theme: 'night' }, controller }
    const action = {
      type: ActionTypes.RESET_SETTING,
    }
    const nextState = app( curState, action )
    const expectedState = { setting, controller }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'update controller when receiving UPDATE_CONTROLLER action', () => {
    const curState = { setting, controller }
    const action = {
      type: ActionTypes.UPDATE_CONTROLLER,
      controller: { ...controller, dropdownMenuStyleOpen: 'true' },
    }
    const nextState = app( curState, action )
    const expectedState = {
      controller: { ...controller, dropdownMenuStyleOpen: 'true' },
      setting,
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )

  it( 'reset controller when receiving RESET_CONTROLLER action', () => {
    const curState = {
      setting,
      controller: { ...controller, dropdownMenuStyleOpen: 'true' },
    }
    const action = {
      type: ActionTypes.RESET_CONTROLLER,
    }
    const nextState = app( curState, action )
    const expectedState = {
      controller,
      setting,
    }
    expect( nextState ).toEqual( expectedState )
    expect( nextState ).not.toBe( curState )
  } )
} )
