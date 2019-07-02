var remember = async (path) => {
  var db = require('../providers/database')
  db().ref('/cache').push(path)
}

process.on('message', remember);

module.exports = remember