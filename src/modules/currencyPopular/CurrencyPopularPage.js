import React, { Component, PropTypes }                        from 'react'
import { connect }                                            from 'react-redux'
import { bindActionCreators }                                 from 'redux'
import { toggleShowCurrencyPopular, loadCurrencyPopularPage } from './actions'
import { getBanksName }                                       from './selectors'
import { getAppSetting }                                      from '../app/selectors'
import { loadBanks }                                          from './sagas'

import { PopularList }                                        from './components'
import { Container }                                          from 'shared'

class CurrencyPopularPage extends Component {
  static propTypes = {
    actions: PropTypes.shape( {
      loadCurrencyPopularPage: PropTypes.func.isRequired,
      toggleShowCurrencyPopular: PropTypes.func.isRequired,
    } ),
    banks: PropTypes.array,
    login: PropTypes.string.isRequired,
    setting: PropTypes.object,
  };

  componentWillMount () {
    this.props.actions.loadCurrencyPopularPage( this.props.login )
  }

  componentWillReceiveProps ( nextProps ) {
    if ( this.props.login !== nextProps.login ) {
      this.props.actions.loadCurrencyPopularPage( nextProps.login )
    }
  }

  render () {
    return !this.props.banks
      ? <h1><i>Loading...</i></h1>
      : <Container padding={'0 5% 5% 5%'}>
          <PopularList {...this.props} />
        </Container>
  }
}

const mapStateToProps = state => {
  const {
    feature: { currencyPopular: { banks } },
    router: { params: { login } },
  } = state

  return {
    banks,
    login,
    banksName: getBanksName( state ),
    setting: getAppSetting( state ),
  }
}

const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      loadCurrencyPopularPage,
      toggleShowCurrencyPopular,
    },
    dispatch,
  ),
} )

const preload = ( { login } ) => [ [ loadBanks ] ]

CurrencyPopularPage.preload = preload

export default connect( mapStateToProps, mapDispatchToProps )(
  CurrencyPopularPage,
)
