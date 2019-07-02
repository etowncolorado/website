module.exports = (request, response, next) => {
  response.set('Access-Control-Allow-Origin', '*')
  next()
}