var controller = require('./support/controller')
var middleware = require('./support/middleware')
var memoize = require('lodash/memoize')
var express = require('express')

var application = (name) => {
  var app = express()
  var get = app.get
  var use = app.use

  app.set('name', name)

  app.get = function (path, route) {
    if (typeof route === 'string') {
      arguments[1] = controller(route)
    }

    return get.apply(app, arguments)
  }

  app.use = function (route) {
    if (typeof route === 'string') {
      arguments[0] = middleware(route)
    }

    return use.apply(app, arguments)
  }

  return app
}

module.exports = memoize(application)