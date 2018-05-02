import Vue from 'vue'
import VueAnalytics from '../../src'

window.ga = jest.fn()
window.Piwik = {}
window.Piwik.getTracker = function(...args){
  return({
    setUserId: jest.fn(),
    setCustomUrl: jest.fn(),
    setDocumentTitle: jest.fn(),
    setCustomDimension: jest.fn(),
    trackPageView: jest.fn(),
    trackEvent: jest.fn()
  })
}

let $vm

beforeEach(() => {
  Vue.use(VueAnalytics, {
    id: 'UA-1234-5'
  })

  $vm = new Vue({})

  $vm.$mount()
})

it ('should track an event', () => {
  $vm.$ga.event('foo', 'bar')
  expect(window.ga).toBeCalledWith('send', 'event', 'foo', 'bar')
})
