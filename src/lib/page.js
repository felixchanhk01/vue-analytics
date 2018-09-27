import config from '../config'
import set from 'lib/set'
import screenview from 'lib/screenview'
import query from 'lib/query'
import piwik from 'lib/piwik'
import {
  noop,
  getQueryString,
  isRouteIgnored,
  getRouteAnalytics,
  isRoute,
  isRouter,
  getBasePath,
  hasProps
} from '../helpers'

export default function page (...args) {
  let route

  if (args.length && isRouter(args[0])) {
    route = args[0].currentRoute
  }

  if (args.length && isRoute(args[0])) {
    route = args[0]
  }

  if (route) {
    const {
      router,
      autoTracking: {
        transformQueryString,
        prependBase
      }
    } = config

    const queryString = getQueryString(route.query)
    const base = router && router.options.base
    const needsBase = prependBase && base
    const piwikSend = route.piwik ? route.piwik : true
    const gaSend = route.ga ? route.ga : true

    let path = route.path + (transformQueryString ? queryString : '')
    path = needsBase ? getBasePath(base, path) : path

    if(piwikSend){
      set('page', path)
      query('send', 'pageview')
    }
    if(gaSend){
      piwik('pageview', path)
    }
  } else {
    let path = window.location.href;
    let pageTitle = null;

    if( args.length & typeof(args[0]) === 'object' ){
      path = args[0].location?args[0].location:path;
      pageTitle = args[0].title?args[0].location:document.title;
    }

    let argList = [];
    let trackingStatus = {};
    args.map(function(x){
      if(typeof(x) === 'object' && 
          ('piwik' in x || 'ga' in x)){
        trackingStatus = x
      }else{
        argList.push(x);
      }
    });

    if(!'ga' in trackingStatus || trackingStatus.ga){
      query('send', 'pageview', ...args)
    }
    if(!'piwik' in trackingStatus || trackingStatus.piwik){
      if(pageTitle){
        piwik('pageview', path, pageTitle)
      }else{
        piwik('pageview', path)
      }
    }
  }
}

export function trackRoute (route) {
  if (isRouteIgnored(route.name)) {
    return
  }

  const { autoTracking } = config
  const { meta: { analytics = {} } } = route
  const proxy = analytics.pageviewTemplate || autoTracking.pageviewTemplate

  if (autoTracking.screenview && !route.name) {
    throw new Error(
      '[vue-analytics] Route name is mandatory when using screenview.'
    )
  }

  if (autoTracking.screenview) {
    screenview(route.name)
    return
  }

  page(proxy ? proxy(route) : route)
}

export function autoTracking () {
  const { router, autoTracking } = config

  if (!autoTracking.page || !router) {
    return
  }

  if (autoTracking.pageviewOnLoad) {
    trackRoute(router.currentRoute)
  }

  config.router.afterEach(function (to, from) {
    const { skipSamePath, shouldRouterUpdate } = autoTracking

    // Default behaviour of the router when the `skipSamePath` is turned on.
    // Skip router change when current and previous route have the same path
    // https://github.com/MatteoGabriele/vue-analytics/issues/73
    if (skipSamePath && to.path === from.path) {
      return
    }

    // Adds a custom way to define when the router should track
    if (typeof shouldRouterUpdate === 'function' && !shouldRouterUpdate(to, from)) {
      return
    }

    // Add a 0 timeout so that the browser doesn't register the previous route
    // https://github.com/MatteoGabriele/vue-analytics/issues/44
    setTimeout(function () {
      trackRoute(router.currentRoute)
    }, 0)
  })
}
