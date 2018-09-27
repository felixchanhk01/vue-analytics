import query from 'lib/query'
import piwik from 'lib/piwik'

export default function event (...args) {
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

  if(!('ga' in trackingStatus) || trackingStatus.ga){
    query('send', 'event', ...argList)
  }
  if(!('piwik' in trackingStatus) || trackingStatus.piwik){
    piwik('event', ...argList)
  }
}
