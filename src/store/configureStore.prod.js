import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END }    from 'redux-saga'
import rootReducer                      from 'rootReducer'

export default function configureStore ( history, initialState ) {
  const logRocket = s => {
    const LogRocket = require( 'logrocket' )
    LogRocket.init( 'zjfivg/currency-exchange' )
    LogRocket.identify( 'zjfivg/currency-exchange', {
      name: 'nattatorn.dev',
      email: 'nattatorn.dev@gmail.com',

      // Add your own custom user variables here, ie:
      subscriptionType: 'pro',
    } )
    return LogRocket.reduxMiddleware()
  }
  const sagaMiddleware = createSagaMiddleware()

  const store = __CLIENT__ && typeof window !== 'undefined'
    ? createStore(
        rootReducer,
        initialState,
        applyMiddleware( sagaMiddleware, logRocket() )
      )
    : createStore( rootReducer, initialState, applyMiddleware( sagaMiddleware ) )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch( END )
  return store
}
