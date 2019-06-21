var application = require('../providers/application')
var https = require('../providers/https')

var app = application('compile')

app.set('view engine', 'pug')
app.get('/', 'pages@about')
app.get('/blog', 'posts@index')
app.get('/blog/:key', 'posts@show')
app.get('/menu', 'pages@menu')
app.get('/contact', 'pages@contact')
app.get('/shop', 'products@index')
app.use('fallback')
app.use('report')

module.exports = https().onRequest(app)