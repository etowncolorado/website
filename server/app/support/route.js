module.exports = (route) => {
  if (typeof route !== 'string') {
    return route
  }

  var [file, action] = route.split('@')
  var folder = action ? 'controllers' : 'middleware'
  var basepath = process.cwd()
  var path = `${basepath}/app/${folder}/${file}.js`

  try {
    var resolver = require(path)
    return action ? resolver[action] : resolver
  } catch (error) {
    return route
  }
}