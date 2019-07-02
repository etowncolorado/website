module.exports = (error, request, response, next) => {
  try {
    var status = error.code || 500
    response.removeHeader('Cache-Control')
    response.status(status)
    response.render(`errors/${status}`, { error })
  } catch (error) {
    response.end(error)
  }
}