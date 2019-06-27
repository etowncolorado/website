var firebase = require('./firebase')
var memoize = require('lodash/memoize')

var database = (name) => {
  firebase().database()
}