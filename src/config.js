import { merge, noop } from './helpers'

const defaultConfig = {
  id: null,
  router: null,
  fields: {},
  ignoreRoutes: [],
  linkers: [],
  commands: {},

  // https://github.com/MatteoGabriele/vue-analytics/issues/103
  disabled: false,

  set: [],
  require: [],

  ecommerce: {
    enabled: false,
    options: null,
    enhanced: false
  },

  autoTracking: {
    screenview: false,
    shouldRouterUpdate: null,
    skipSamePath: false,
    exception: false,
    exceptionLogs: true,
    page: true,
    transformQueryString: true,
    pageviewOnLoad: true,
    pageviewTemplate: null,
    untracked: true,
    prependBase: true
  },

  debug: {
    enabled: false,
    trace: false,
    sendHitTask: true
  },

  batch: {
    enabled: false,
    delay: 500,
    amount: 2
  },

  checkDuplicatedScript: false,
  disableScriptLoader: false,

  beforeFirstHit: noop,
  ready: noop,

  untracked: [],

  piwikEndpoint: null,
  piwikSiteId: 0,
  dimensions: null
}

let config = { ...defaultConfig }

export function update (params) {
  merge(config, params)
}

export function reset () {
  config = { ...defaultConfig }
}

export function getId () {
  return !config.id ? [] : [].concat(config.id)
}

export function getPiwik () {
  let userId = null;
  if ( config.fields !== null){
    if ( config.fields.userId !== null ){
      userId = config.fields.userId;
    }
  }
  
  if( !config.piwikEndpoint || config.piwikSiteId === null ){
    return ({piwikEndpoint: null, piwikSiteId: null})
  }else{
    return ({piwikEndpoint: config.piwikEndpoint, 
      piwikSiteId: config.piwikSiteId, 
      userId: userId})
  }
}

export function getDimensions () {
  return (config.dimensions);
}

export default config
