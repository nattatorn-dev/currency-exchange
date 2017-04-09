const getApp = state => state.app
const getAppSetting = state => getApp( state ).setting
const getAppController = state => getApp( state ).controller

export { getApp, getAppSetting, getAppController }
