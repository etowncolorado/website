module.exports = {
  test (request, response) {
    var timestamp = Date.now().toString()
    var maxage = response.get('Cache-Control')
    console.log(timestamp)
    console.log(maxage)
    response.send(timestamp)
  },

  async show (request, response, next) {
    try {
      var storage = require('../providers/storage')
      var path = request.path.slice(1)
      var file = storage().file(path)
      var metadata = await file.getMetadata()
      var contentType = metadata[0].contentType
      var stream = file.createReadStream()
      response.type(contentType)
      stream.pipe(response)
    } catch (error) {
      next(error)
    }
  }
}