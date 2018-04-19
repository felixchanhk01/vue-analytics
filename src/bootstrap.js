import { loadScript } from './helpers'
import config, { update } from './config'
import createTrackers from './create-trackers'
import collectors from './collectors'
import { autoTracking } from 'lib/page'
import noga from './no-ga'

export default () => {
  if (typeof document === 'undefined') {
    return
  }

  const { wait, id, disabled, debug, disableScriptLoader } = config
  const filename = debug.enabled ? 'analytics_debug' : 'analytics'
  const resource = `https://www.google-analytics.com/${filename}.js`
  const piwik_source = 'piwik/piwik.js'

  if (!id) {
    throw new Error(
      '[vue-analytics] Missing the "id" parameter. Add at least one tracking domain ID'
    )
  }

  if (!window.ga || !disableScriptLoader) {
    loadScript(resource).catch(() => {
      console.error(
        `[vue-analytics] An error occured trying to load ${resource}. Please check your connection.`
      )
    })
  }

  if (!window.Piwik || !disableScriptLoader) {
    loadScript(piwik_source).catch(() => {
      console.error(
        `[vue-analytics] An error occured trying to load ${piwik_source}. Please check your connection.`
      )
    })
  }

  Promise.resolve(
    (typeof id === 'function') ? id() : id
  ).then(newId => {
    update({ id: newId })
  }).then(() => {
    return (typeof disabled === 'function') ? disabled() : disabled
  }).then(disableTracking => {
    update({ disabled: disableTracking })

    if (disableTracking) {
      noga()
    }

    createTrackers()
    collectors()
    autoTracking()
  })
}
