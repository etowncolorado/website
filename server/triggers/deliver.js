var functions = require('firebase-functions')
var express = require('express')
var app = require('../app.js')

var deliver = express()
var maxage = 'public, max-age=300, s-maxage=31536000'

deliver.get('/test',
  (request, response) => {
    var timestamp = Date.now().toString()
    
    console.log(timestamp)
    console.log(maxage)

    response.set('Cache-Control', maxage)
    response.send(timestamp)
  }
)

deliver.get('*',
  async (request, response) => {
    try {
      var file = app.storage().bucket().file(request.path)
      var metadata = await file.getMetadata()
      response.set('Access-Control-Allow-Origin', '*')
      response.set('Cache-Control', maxage)
      response.set('Content-Type', metadata[0].contentType)
      file.createReadStream().pipe(response)
    } catch (error) {
      console.log(request.path)
      console.log(error)
      response.status(404).send()
    }
  }
)

module.exports = functions.https.onRequest(deliver)