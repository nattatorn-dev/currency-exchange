import { createStore, applyMiddleware, compose } from 'redux'
import createLogger                              from 'redux-logger'
import createSagaMiddleware, { END }             from 'redux-saga'
import { DevTools }                              from 'modules'
import rootReducer                               from 'rootReducer'

export default function configureStore ( history, initialState ) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware( sagaMiddleware, createLogger() ),
      DevTools.instrument(),
    ),
  )

  if ( module.hot ) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept( '../rootReducer.js', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../rootReducer').default;
      store.replaceReducer( nextRootReducer )
    } )
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch( END )
  return store
}
