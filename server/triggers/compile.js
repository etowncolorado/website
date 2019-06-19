var functions = require('firebase-functions')
var express = require('express')
var rollup = require('rollup')
var path = require('path')
var app = require('../app.js')

var compile = express()
var scripts = path.resolve(__dirname, '..', 'assets', 'scripts')
var pages = app.database().ref('/pages')

compile.set('view engine', 'pug')

compile.get(/\.js$/,
  async (request, response) => {
    var input = 'assets/scripts' + request.path
    var bundle = await rollup.rollup({ input })
    var results = await bundle.generate({ format: 'cjs' })
    response.send(results.output[0].code)
  }
)

compile.get('/:page',
  async (request, response) => {
    var page = request.params.page
    var data = await pages.child(page).once('value')

    response.render(`pages/${request.params.page}`, data)
  }
)

compile.get('*',
  (request, response) => {
    var view = request.path.slice(1)

    response.render(view)
  }
)

// exports.request = functions.https.onRequest(
//   async (request, response) => {
//     // if (request.path.slice(-3) === '.js') {
//     //   var bundle = await require('rollup').rollup({ input: 'main.js' });
//     //   var output = await bundle.generate({ format: 'cjs' });
//     //   return response.send(output);
//     // }

//     try {
//       var render = require('./views/' + request.path);
//     } catch (error) {
//       var render = (path) => `Not Found [${path}]`;
//     }

//     var result = render(request.path);

//     response.send(result);
//   }
// )

module.exports = functions.https.onRequest(compile)