import { createStore, applyMiddleware, compose } from 'redux'
import createLogger                              from 'redux-logger'
import createSagaMiddleware, { END }             from 'redux-saga'
import rootReducer                               from 'rootReducer'

/**
 * Method to create stores based on a set of passed
 * reducers
 * @param {object} history
 * @param {object} initialState
 * @return {object} redux store
 */
export default function configureStore ( history, initialState ) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware( sagaMiddleware, createLogger() )
  const createStoreWithMiddleware = compose(
    middleware,
    __CLIENT__ && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  )

  const composeEnhancers =
    ( __CLIENT__ && typeof window.devToolsExtension !== 'undefined' ) || compose
  const store = createStoreWithMiddleware( createStore )(
    rootReducer,
    initialState,
  )

  if ( module.hot ) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept( '../rootReducer.js', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../rootReducer').default
      store.replaceReducer( nextRootReducer )
    } )
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch( END )
  return store
}
