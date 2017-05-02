import { take, put, call, fork, select } from 'redux-saga/effects'
import { delay }                         from 'redux-saga'
import * as actions                      from './actions'
import * as appActions                   from '../app/actions'
import {
  getBanks,
  getBankCurrencyPopularByIndex,
  getBankCurrencyPopularPropsDataByPopular,
  getBanksByIndex,
}                                        from './selectors'
import { getAppSetting, getDelay }       from '../app/selectors'
import { fetchBanks }                    from './fecth'
import { datetime }                      from 'services'
import { currency }                      from 'helpers'

const {
  LOAD_CURRENCY_POPULAR_PAGE,
  TOGGLE_SHOW_CURRENCY_POPULAR,
  banks,
  updateCurrencyPopular,
} = actions

const { updateDelayByName, resetDelayByName } = appActions

function* loadBanks ( requiredFields ) {
  const banks = yield select( getBanks )
  if ( banks.length === 0 ) {
    yield call( fetchBanks )
  }
}

function* forceLoadBanks () {
  yield call( fetchBanks )
}

function* intervalLoadBanks () {
  const { fetchBanks } = yield select( getDelay )
  if ( fetchBanks !== 0 ) {
    yield call( delay, datetime.second() )
    yield put( updateDelayByName( 'fetchBanks', fetchBanks - 1 ) )
    yield * intervalLoadBanks()
  } else {
    yield * forceLoadBanks()
    yield put( resetDelayByName( 'fetchBanks' ) )
    yield * intervalLoadBanks()
  }
}

function* watchLoadCurrencyPopularPage () {
  while ( true ) {
    const { login, requiredFields = [] } = yield take(
      LOAD_CURRENCY_POPULAR_PAGE,
    )
    yield fork( loadBanks )
    // yield * intervalLoadBanks()
  }
}

function* watchToggleShowCurrencyPopular () {
  while ( true ) {
    const { index } = yield take( TOGGLE_SHOW_CURRENCY_POPULAR )
    const { isTotal } = yield select( getBankCurrencyPopularByIndex, index )
    if ( isTotal ) {
      const { currentSortCurrencies } = yield select( getAppSetting )
      const bank = yield select(
        getBankCurrencyPopularPropsDataByPopular,
        index,
        currency.injectCurrency( currentSortCurrencies, 'USD' ),
      )
      yield put( updateCurrencyPopular( index, bank ) )
    } else {
      const { data } = yield select( getBanksByIndex, index )
      yield put( updateCurrencyPopular( index, data ) )
    }
  }
}

export {
  loadBanks,
  watchLoadCurrencyPopularPage,
  watchToggleShowCurrencyPopular,
}
