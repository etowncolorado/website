module.exports = (error, request, response, next) => {
  response.status(500)

  try {
    response.render('errors/500', { error })
  } catch (error) {
    response.end(error)
  }
}