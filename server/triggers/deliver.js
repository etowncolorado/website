var application = require('../providers/application')
var https = require('../providers/https')

var app = application('deliver')

app.get('/test', 'files@test')
app.get('*', 'files@cache')

module.exports = https().onRequest(app)