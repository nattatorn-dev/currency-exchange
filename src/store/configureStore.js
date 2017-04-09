if ( process.env.NODE_ENV === 'production' ) {
  module.exports = require( 'store/configureStore.prod' ) // eslint-disable-line global-require
} else {
  module.exports = require( 'store/configureStore.dev' ) // eslint-disable-line global-require
}
