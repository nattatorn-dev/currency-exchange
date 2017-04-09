import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from './actions'
import {
  getBanks,
  getBankCurrencyPopularByIndex,
  getBankCurrencyPopularPropsDataByPopular,
  getBanksByIndex,
} from './selectors'
import { getAppSetting } from '../app/selectors'
import { fetchBanks } from './fecth'
import { currency } from 'helpers'

const {
  LOAD_CURRENCY_POPULAR_PAGE,
  TOGGLE_SHOW_CURRENCY_POPULAR,
  banks,
  updateCurrencyPopular,
} = actions

function* loadBanks ( requiredFields ) {
  const banks = yield select( getBanks )
  if ( banks.length === 0 ) {
    yield call( fetchBanks )
  }
}

function* watchLoadCurrencyPopularPage () {
  while ( true ) {
    const { login, requiredFields = [] } = yield take(
      LOAD_CURRENCY_POPULAR_PAGE,
    )
    yield fork( loadBanks )
  }
}

function* watchToggleShowCurrencyPopular () {
  while ( true ) {
    const { index } = yield take( TOGGLE_SHOW_CURRENCY_POPULAR )
    const { isTotal } = yield select( getBankCurrencyPopularByIndex, index )
    if ( isTotal ) {
      const { popularCurrenciesLists } = yield select( getAppSetting )
      const bank = yield select(
        getBankCurrencyPopularPropsDataByPopular,
        index,
        currency.injectCurrency( popularCurrenciesLists, 'USD' ),
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
