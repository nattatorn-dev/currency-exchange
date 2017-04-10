import { take, put, call, select }        from 'redux-saga/effects'
import { currencies }                     from '../../../assets/data/currenciesMaster'
import * as actions                       from './actions'
import { getBanks, getBanksTopRateValue } from '../currencyPopular/selectors'
import { fetchBanks }                     from '../currencyPopular/fecth'

const { addCurrencyExchange } = actions

function* watchLoadCurrencyExchangePage () {
  while ( true ) {
    const { login, name, requiredFields = [] } = yield take(
      actions.LOAD_CURRENCY_EXCHANGE,
    )
    const banks = yield select( getBanks )
    if ( banks.length === 0 ) {
      yield call( fetchBanks )
    }
    const currencyExchange = yield select(
      getBanksTopRateValue,
      currencies,
      login,
      name,
    )
    if ( currencyExchange.length !== 0 ) {
      yield put( addCurrencyExchange( login, name, currencyExchange ) )
    }
  }
}

export { watchLoadCurrencyExchangePage }
