import { action } from 'services/action'

const NAVIGATE = 'NAVIGATE'
const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE'
const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
const UPDATE_SETTING = 'UPDATE_SETTING'
const RESET_SETTING = 'RESET_SETTING'
const UPDATE_CONTROLLER = 'UPDATE_CONTROLLER'
const RESET_CONTROLLER = 'RESET_CONTROLLER'

const navigate = pathname => action( NAVIGATE, { pathname } )
const updateRouterState = state => action( UPDATE_ROUTER_STATE, { state } )
const resetErrorMessage = () => action( RESET_ERROR_MESSAGE )
const updateSetting = setting => action( UPDATE_SETTING, { setting } )
const resetSetting = () => action( RESET_SETTING )
const updateController = controller =>
  action( UPDATE_CONTROLLER, { controller } )
const resetController = () => action( RESET_CONTROLLER )

export {
  NAVIGATE,
  UPDATE_ROUTER_STATE,
  RESET_ERROR_MESSAGE,
  UPDATE_SETTING,
  RESET_SETTING,
  UPDATE_CONTROLLER,
  RESET_CONTROLLER,
  navigate,
  updateRouterState,
  resetErrorMessage,
  updateSetting,
  resetSetting,
  updateController,
  resetController,
}
