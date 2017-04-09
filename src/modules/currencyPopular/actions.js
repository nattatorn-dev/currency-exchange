import { createRequestTypes, action } from 'services/action'

const BANKS = createRequestTypes( 'BANKS' )
const UPDATE_CURRENCY_POPULAR = 'UPDATE_CURRENCY_POPULAR'
const TOGGLE_SHOW_CURRENCY_POPULAR = 'TOGGLE_SHOW_CURRENCY_POPULAR'
const LOAD_CURRENCY_POPULAR_PAGE = 'LOAD_CURRENCY_POPULAR_PAGE'

const banks = {
  request: () => action( BANKS.REQUEST ),
  success: response => action( BANKS.SUCCESS, { response } ),
  failure: error => action( BANKS.FAILURE, { error } ),
}

const loadCurrencyPopularPage = ( login, requiredFields = [] ) =>
  action( LOAD_CURRENCY_POPULAR_PAGE, { login, requiredFields } )
const updateCurrencyPopular = ( index, data ) =>
  action( UPDATE_CURRENCY_POPULAR, { index, data } )
const toggleShowCurrencyPopular = index =>
  action( TOGGLE_SHOW_CURRENCY_POPULAR, { index } )

export {
  BANKS,
  UPDATE_CURRENCY_POPULAR,
  TOGGLE_SHOW_CURRENCY_POPULAR,
  LOAD_CURRENCY_POPULAR_PAGE,
  banks,
  loadCurrencyPopularPage,
  updateCurrencyPopular,
  toggleShowCurrencyPopular,
}
