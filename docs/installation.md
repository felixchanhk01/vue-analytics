## Get started

Install the package
```bash
npm install git://github.com/felixchanhk01/vue-analytics.git#vue-ga-piwik-5
```

Start using it your Vue application
```js
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  piwikEndpoint: 'http://xxx.com/piwik.php',
  piwikSiteId: 0,
  dimensions: {
    dimension1: 'xxxx',
    dimension2: 'xxxx'
  },
  fields: {
    userId: 'xxx'
  }
 })
})
```

## Track multiple accounts

Pass an array of strings for a multiple tracking system. Every hit will be fired twice: each time with a different tracker name

```js
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: ['UA-XXX-A', 'UA-XXX-B'],
  piwikEndpoint: 'http://xxx.com/piwik.php',
  piwikSiteId: 0
})
```

## Use functions or/and Promises

It is also possible to pass a function, a Promise or a function that returns a Promise: as soon as it returns always a string or an array of strings

```js
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import axios from 'axios'

// a function
Vue.use(VueAnalytics, {
  id () {
    return 'UA-XXX-A'
  },
  piwikEndpoint () {
    return 'http://xxx.com/piwik.php'
  },
  piwikSiteId () {
    return 0
  }
})

// a Promise
Vue.use(VueAnalytics, {
  id: axios.get('/api/foo').then(response => {
    return response.data
  }),
  piwikEndpoint: axios.get('/api/foo2').then(response => {
    return response.data
  }),
  piwikSiteId: axios.get('/api/foo3').then(response => {
    return response.data
  })
})

// a function that returns a Promise
Vue.use(VueAnalytics, {
  id: () => axios.get('/api/foo').then(response => {
    return response.data
  }),
  piwikEndpoint: () => axios.get('/api/foo2').then(response => {
    return response.data
  }),
  piwikSiteId: () => axios.get('/api/foo3').then(response => {
    return response.data
  })
})
```