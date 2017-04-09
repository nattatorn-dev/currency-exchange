import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCurrencyExchange, loadMoreStargazers } from './actions'
import { getBankCurrencyExchange } from './selectors'
import { getAppSetting } from '../app/selectors'

import { ComparisonList } from './components'
import { Container } from 'shared'

class CurrencyExchangePage extends Component {
  static propTypes = {
    actions: PropTypes.shape( {
      loadCurrencyExchange: PropTypes.func.isRequired,
    } ),
    fullName: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setting: PropTypes.object,
  };

  componentWillMount () {
    this.props.actions.loadCurrencyExchange( this.props.login, this.props.name )
  }

  componentWillReceiveProps ( nextProps ) {
    if ( nextProps.fullName !== this.props.fullName ) {
      this.props.actions.loadCurrencyExchange( nextProps.login, nextProps.name )
    }
  }

  render () {
    const { banks, name, login } = this.props

    return !banks
      ? <h1><i>Loading {name} {login} details...</i></h1>
      : <div>
          <Container padding={'0 5% 5% 5%'}>
            <ComparisonList {...this.props} />
          </Container>
        </div>
  }
}

const mapStateToProps = state => {
  const { router: { params: { login, name } } } = state
  const fullName = `${ login }/${ name }`

  return {
    fullName,
    login,
    name,
    banks: getBankCurrencyExchange( state ),
    setting: getAppSetting( state ),
  }
}

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      loadCurrencyExchange,
    },
    dispatch,
  ),
} )

export default connect( mapStateToProps, mapDispatchToProps )(
  CurrencyExchangePage,
)
