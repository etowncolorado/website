module.exports = (request, response, next) => {
  if (process.env.ENV !== 'preview') {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=31536000')
  }
  
  next()
}