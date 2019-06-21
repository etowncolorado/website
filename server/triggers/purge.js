var storage = require('../providers/storage')
var request = require('request-promise')

var host = 'https://etowncolorado-content.web.app/'
var method = 'PURGE'

var purge = (object) => {
  var url = host + object.name
  var opt = { method } 

  return request(url, opt)
}

module.exports = storage().onFinalize(purge)