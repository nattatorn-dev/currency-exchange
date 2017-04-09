import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import App from '../__mocks__/App'

describe( 'App', () => {
  let component
  beforeEach( () => {
    component = shallow( <App /> )
  } )

  it( 'mathces its snapshot', () => {
    expect( component ).toMatchSnapshot()
  } )
} )
