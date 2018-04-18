import config from './config'

/**
 * Whining helper
 * @param  {String} message
 */
export const warn = function (...message) {
  /* eslint-disable */
  console.warn(`[VueAnalytics] ${message.join(' ')}`)
  /* eslint-enable */
}

/**
 * Returns if a string exists in the array of routes
 * @param  {String} name
 * @return {Boolean}
 */
export const exists = function (name) {
  return !!(config.ignoreRoutes.length && config.ignoreRoutes.indexOf(name) !== -1)
}

/**
 * Merges two objects
 * @param  {Object} obj
 * @param  {Object} src
 * @return {Object}
 */
export const merge = function (obj, src) {
  Object.keys(src).forEach(function (key) {
    if (obj[key] && typeof obj[key] === 'object') {
      merge(obj[key], src[key])
      return
    }

    obj[key] = src[key]
  })

  return obj
}

export function getName (value) {
  return value.replace(/-/gi, '')
}

export function getListId () {
  return [].concat(config.id)
}

export function generateMethodName (method, id) {
  const domain = getName(id)
  return getListId().length > 1 ? `${domain}.${method}` : method
}

export function isSSR () {
  return typeof window === 'undefined'
}

export const onAnalyticsReady = () => {
  return new Promise((resolve, reject) => {
    const poll = setInterval(() => {
      if (isSSR() || !window.ga) {
        return
      }

      clearInterval(poll)

      resolve()
    }, 10)
  })
}

export const onPiwikReady = () => {
  return new Promise((resolve, reject) => {
    const pollPiwik = setInterval(() => {
      if (isSSR() || !window.Piwik) {
        return
      }

      clearInterval(pollPiwik)

      resolve()
    }, 10)
  })
}

export function getPiwik () {
  return config.tracker;
}

export function getDimension () {
  if (config.dimension === undefined){
    return
  }else{
    return config.dimension;
  }
}