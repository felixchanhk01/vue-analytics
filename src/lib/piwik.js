import config, { getPiwik, getDimensions } from '../config'
import { getMethod } from '../helpers'

let intr
let coll = []

export default function piwik (method, ...args) {
  
  const {piwikEndpoint, piwikSiteId, userId} = getPiwik();
  const client = window.Piwik;
  const tracker = client.getTracker(piwikEndpoint, piwikSiteId);

  if ( userId != null ){
    tracker.setUserId(userId);
  }

  console.log(window.Piwik);
  if(method === 'pageview'){
    // Page view events, send dimension
    const dimensions = getDimensions();

    let url = window.location.href;
    if(args.length > 0 & args[0]){
      tracker.setCustomUrl(args[0]);
    }

    if(args.length > 1 & args[1]){
      tracker.setDocumentTitle(args[1]);
    }

    if (dimensions){
      Object.entries(dimensions).map(row => {
        const [key, value] = row;
        const newKey = parseInt(key.match('mension([0-9]+)')[1]);
        tracker.setCustomDimension(newKey, value);
      });
    }

    tracker.trackPageView();
  }else if(method === 'event'){
    // Send tracking events
    if (args.length > 1){
      if( typeof(args[0]) === 'object' ){
        const eventObj = args[0];
        const category = eventObj.eventCategory?eventObj.eventCategory:null;
        const action = eventObj.eventAction?eventObj.eventAction:null;
        const label = eventObj.eventLabel?eventObj.eventLabel:null;
        const value = eventObj.eventValue?eventObj.eventValue:null;

        tracker.trackEvent(category, action, label, value);
      }else{
        const category = args[0]?args[0]:null;
        const action = args[1]?args[1]:null;
        const label = args[2]?args[2]:null;
        const value = args[3]?args[3]:null;

        tracker.trackEvent(category, action, label, value);
      }
    }
  }
    
  
}
