## Get started

Install the package
```bash
npm install git://github.com/felixchanhk01/vue-analytics.git#vue-ga-piwik-4
```

Start using it your Vue application
```js
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  piwikEndpoint: 'http://xxx.com/piwik.php',
  piwikSiteId: 0,
  userId: 'xxxxx',
  dimension: {
    dimension1: 'xxxx',
    dimension2: 'xxxx'
  }
})
```

**It's possible to use the Analytics library using a Vue instance or accessing it directly in the scope of your component**

