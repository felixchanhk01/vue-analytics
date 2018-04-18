import { getListId, generateMethodName } from './utils'
import { isSSR } from './utils'

export default function ga (method, ...args) {

  arguments.callee === ga;
  if (isSSR() || typeof window.ga === 'undefined') {
    return
  }

  let all_args = arguments;

  getListId().forEach(function (id) {
    let params = {};
    if ( arguments.length >= 3 ){
      getDimension().map(row => {
        const [key, value] = row;
        params[`dimension${key}`] = value;
      });
      let final_obj = Object.assign({}, arguments[2], params);
      all_args[2] = final_obj;
    }
    all_args[0] = generateMethodName(arguments[0], id)
    
    window.ga.apply(null, all_args);
  });
}


