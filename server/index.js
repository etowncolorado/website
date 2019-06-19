var finder = require('fs')
var path = require('path')

var folder = path.resolve(__dirname, 'triggers')
var files = finder.readdirSync(folder)

var register = (name, path) => {
  exports[name] = require(path)
}

files.forEach(
  (name) => register(
    name.replace('.js', ''),
    path.resolve(folder, name)
  )
)
