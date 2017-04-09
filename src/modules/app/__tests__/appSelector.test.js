import { getApp, getAppSetting, getAppController } from '../selectors'
import { setting, controller } from '../../../constants'

describe( 'app selector', () => {
  const state = { app: { setting, controller } }
  it( 'selects all app', () => {
    expect( getApp( state ) ).toEqual( { setting, controller } )
  } )
  it( 'selects setting app', () => {
    expect( getAppSetting( state ) ).toEqual( setting )
  } )
  it( 'selects controller app', () => {
    expect( getAppController( state ) ).toEqual( controller )
  } )
} )
