var memoize = require('lodash/memoize')

var storage = (bucket) => {
  var functions = require('firebase-functions')
  var storage = functions.storage

  if (bucket) {
    storage = storage.bucket(bucket)
  }

  return storage.object()
}

module.exports = memoize(storage)