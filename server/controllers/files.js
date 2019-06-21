var firebase = require('../providers/firebase')

var maxage = 'public, max-age=300, s-maxage=31536000'

module.exports = {
  test (request, response) {
    var timestamp = Date.now().toString()
    console.log(timestamp)
    console.log(maxage)
    response.set('Cache-Control', maxage)
    response.send(timestamp)
  },

  async cache (request, response) {
    try {
      var file = firebase().storage().bucket().file(request.path)
      var metadata = await file.getMetadata()
      response.set('Access-Control-Allow-Origin', '*')
      response.set('Cache-Control', maxage)
      response.set('Content-Type', metadata[0].contentType)
      file.createReadStream().pipe(response)
    } catch (error) {
      console.log(request.path)
      console.log(error)
      response.status(404).end()
    }
  }
}