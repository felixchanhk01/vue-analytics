export default function () {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
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
      return resolve()
    })
  })
}
