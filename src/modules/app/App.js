import React, { Component, PropTypes }      from 'react'
import { bindActionCreators }               from 'redux'
import { connect }                          from 'react-redux'
import Helmet                               from 'react-helmet'
import { StickyContainer, Sticky }          from 'react-sticky'
import './global-styles'
import {
  navigate,
  resetErrorMessage,
  updateController,
  updateRouterState,
  updateSetting,
}                                           from './actions'
import { getAppSetting, getAppController }  from './selectors'
import { getBankscurrenciesUniqToObj }      from '../currencyPopular/selectors'

import { Main, Theme, Header, Nav, Footer } from './components'

class App extends Component {
  static propTypes = {
    actions: PropTypes.shape( {
      navigate: PropTypes.func.isRequired,
      updateRouterState: PropTypes.func.isRequired,
      updateSetting: PropTypes.func.isRequired,
      updateController: PropTypes.func.isRequired,
      resetErrorMessage: PropTypes.func.isRequired,
    } ),
    children: PropTypes.node,
    controller: PropTypes.object,
    currencies: PropTypes.array,
    errorMessage: PropTypes.string,
    inputValue: PropTypes.string.isRequired,
    location: PropTypes.shape( { pathname: PropTypes.string } ),
    router: PropTypes.object,
    setting: PropTypes.object,
  }

  componentWillMount () {
    this.props.actions.updateRouterState( {
      pathname: this.props.location.pathname,
      params: this.props.params,
    } )
  }

  componentWillReceiveProps ( nextProps ) {
    if ( nextProps.errorMessage ) {
      // handle error here
    }
    if ( this.props.location.pathname !== nextProps.location.pathname ) {
      this.props.actions.updateRouterState( {
        pathname: nextProps.location.pathname,
        params: nextProps.params,
      } )
    }
  }

  handleDismissClick = e => {
    this.props.actions.resetErrorMessage()
    e.preventDefault()
  }

  handleChange = nextValue => {
    this.props.actions.navigate( `/${ nextValue }` )
  }

  handleDropDownClick = e => {
    e.preventDefault()
    this.props.actions.updateController( {
      ...this.props.controller,
      dropdownMenuStyleOpen: false,
    } )
  }

  render () {
    const {
      actions: { updateSetting, updateController },
      children,
      controller,
      currencies,
      inputValue,
      router,
      setting,
    } = this.props
    return (
      <div>
        <Helmet
          title="Currency Exchange Rates"
          meta={[
            { property: 'og:site_name', content: 'Currency Exchange Rates' },
          ]}
        />
        <StickyContainer style={{ zIndex: 4 }}>
          <Main setting={setting} onClick={this.handleDropDownClick}>
            <Sticky style={{ zIndex: 3 }}>
              <Theme setting={setting}>
                <Header
                  setting={setting}
                  controller={controller}
                  router={router}
                  currencies={currencies}
                  value={inputValue}
                  updateSetting={updateSetting}
                  updateController={updateController}
                  onChange={this.handleChange}
                />
              </Theme>
              <Nav />
            </Sticky>
            <Theme setting={setting}>
              {children}
            </Theme>
          </Main>
          <Theme setting={setting}>
            <Footer />
          </Theme>
        </StickyContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ( {
  errorMessage: state.errorMessage,
  inputValue: state.router.pathname.substring( 1 ),
  router: state.router,
  controller: getAppController( state ),
  currencies: getBankscurrenciesUniqToObj( state ),
  setting: getAppSetting( state ),
} )

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      navigate,
      resetErrorMessage,
      updateController,
      updateRouterState,
      updateSetting,
    },
    dispatch
  ),
} )

export default connect( mapStateToProps, mapDispatchToProps )( App )
