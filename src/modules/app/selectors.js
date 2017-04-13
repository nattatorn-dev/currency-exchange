const getApp = state => state.app
const getAppSetting = state => getApp( state ).setting
const getAppController = state => getApp( state ).controller
const getDate = state => getApp( state ).date
const getDelay = state => getApp( state ).delay

export { getApp, getAppSetting, getAppController, getDate, getDelay }
