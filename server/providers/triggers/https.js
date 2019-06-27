var once = require('lodash/once')

var https = () => {
  var functions = require('firebase-functions')

  return functions.https
}

module.exports = once(https)