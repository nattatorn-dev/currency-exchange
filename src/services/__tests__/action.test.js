import { fetchActios, action, createRequestTypes } from '../action'
import * as ActionTypes from '../../modules/app/actions'

describe( 'services action', () => {
  it( 'fetchActios', () => {
    const expectedFetchActios = [ 'REQUEST', 'SUCCESS', 'FAILURE' ]
    expect( fetchActios ).not.toBe( expectedFetchActios )
    expect( fetchActios ).toEqual( expectedFetchActios )
  } )

  it( 'action', () => {
    const payload = {
      path: '/USD',
      nextPath: '/USD/100',
    }
    const expectedAction = {
      type: ActionTypes.NAVIGATE,
      ...payload,
    }
    const actionWithPayload = action( ActionTypes.NAVIGATE, payload )
    expect( actionWithPayload ).not.toBe( expectedAction )
    expect( actionWithPayload ).toEqual( expectedAction )
  } )

  it( 'createRequestTypes', () => {
    const expectedCreateRequestTypes = {
      FAILURE: 'VIDEOS_FAILURE',
      REQUEST: 'VIDEOS_REQUEST',
      SUCCESS: 'VIDEOS_SUCCESS',
    }
    const actions = createRequestTypes( 'VIDEOS' )

    expect( actions ).not.toBe( expectedCreateRequestTypes )
    expect( actions ).toEqual( expectedCreateRequestTypes )
  } )
} )
