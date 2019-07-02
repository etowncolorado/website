module.exports = async (request, response, next) => {
  if (request.path === '/') {
    return next()
  }

  try {
    var storage = require('../providers/storage')
    var path = request.path.slice(1)
    var file = storage().file(path)
    var info = await file.getMetadata()
    response.set('Access-Control-Allow-Origin', '*')
    response.type(info[0].contentType)
    file.createReadStream().pipe(response)
  } catch (error) {
    if (error.code === 404) {
      next()
    } else {
      next(error)
    }
  }
}
