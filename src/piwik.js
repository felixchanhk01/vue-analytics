import { isSSR, getPiwik, getDimension } from './utils'

export default function piwik (method, action, ...args) {
  if (isSSR() || typeof window.ga === 'undefined') {
    return
  }

  tracker = getPiwik();
  if (method === 'send') {
    // Piwik only consider event and pageviews events
    if ( action === 'pageview' ) {

      const params = {};
      getDimension().map(row => {
        const [key, value] = row;
        params[`dimension${key}`] = value;
      });

      tracker.trackPageView(undefined, params);
      tracker.enableLinkTracking(true);
    }else if( action === 'event') {
      const params = {};
      getDimension().map(row => {
        const [key, value] = row;
        params[`dimension${key}`] = value;
      });
      tracker.trackEvent(category, action, label, value, params);
    }
  }
}
