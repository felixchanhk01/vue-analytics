import query from 'lib/query'
import piwik from 'lib/piwik'

export default function event (...args) {
  query('send', 'event', ...args)
  piwik('event', ...args)
}
