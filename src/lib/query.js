import config, { getId, getDimensions } from '../config'
import { getMethod } from '../helpers'

let intr
let coll = []

export default function query (method, ...args) {

  const dimensions = getDimensions();
  // TO-DO Set GA Dimension for PV
  getId().forEach(function (id) {

    let argsList = args;
    if (argsList.length >= 1){
      if(argsList[0] === 'pageview' && dimensions){
        let params = {};
        Object.entries(dimensions).map(row => {
          const [key, value] = row;
          params[key] = value;
        });

        if(argsList.length >= 2){
          argsList[1] = Object.assign({}, argsList[1] , params);
        }else{
          argsList[1] = params;
        }
      }
    }

    if (config.batch.enabled) {
      coll.push({
        m: getMethod(method, id),
        a: argsList
      })

      if (!intr) {
        intr = setInterval(() => {
          if (!coll.length) {
            clearInterval(intr)
            intr = null
          } else {
            coll.splice(0, config.batch.amount).forEach(q => {
              window.ga(q.m, ...q.a)
            })
          }
        }, config.batch.delay)
      }
    } else {
      window.ga(getMethod(method, id), ...argsList)
    }
  })
}
