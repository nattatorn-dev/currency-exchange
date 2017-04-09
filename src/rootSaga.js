import { fork } from 'redux-saga/effects'

import { sagas as appSagas } from 'modules/app'
import { sagas as currencyPopularSagas } from 'modules/currencyPopular'
import { sagas as currencyExchangeSagas } from 'modules/currencyExchange'

export default function* rootSaga () {
  yield [
    fork( appSagas.watchNavigate ),
    fork( currencyPopularSagas.watchLoadCurrencyPopularPage ),
    fork( currencyPopularSagas.watchToggleShowCurrencyPopular ),
    fork( currencyExchangeSagas.watchLoadCurrencyExchangePage ),
  ]
}
