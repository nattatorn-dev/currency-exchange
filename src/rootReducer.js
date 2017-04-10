import { combineReducers }          from 'redux'
import * as appReducer              from 'modules/app/reducers'
import * as currencyPopularReducer  from 'modules/currencyPopular/reducers'
import * as currencyExchangeReducer from 'modules/currencyExchange/reducers'

const feature = combineReducers( {
  currencyPopular: currencyPopularReducer.currencyPopular,
  currencyExchange: currencyExchangeReducer.currencyExchange,
} )

const rootReducer = combineReducers( {
  app: appReducer.app,
  entities: appReducer.entities,
  errorMessage: appReducer.errorMessage,
  router: appReducer.router,
  feature,
} )

export default rootReducer
