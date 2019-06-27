module.exports = (route) => {
  var [file, action] = route.split('@')
  var path = `${process.cwd()}/controllers/${file}.js`

  try {
    var controller = require(path)

    if (action) {
      controller = controller[action]
    }
    
    return controller
  } catch (error) {
    return route
  }
}