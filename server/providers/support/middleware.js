module.exports = (route) => {
  var path = `${process.cwd()}/middlewares/${route}.js`

  try {
    return require(path)
  } catch (error) {
    return route
  }
}