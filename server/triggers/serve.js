
var functions = require('firebase-functions')
var server = require('../app/providers/server')

var app = server('compile')

app.set('views', 'assets/views')
app.set('view engine', 'pug')

app.use('gzip-compression')
app.use('cache-forever')
app.use('remote-storage')
// app.use('store')

app.get('/', 'pages@about')
app.get('/blog', 'posts@index')
app.get('/blog/:key', 'posts@show')
app.get('/menu', 'pages@menu')
app.get('/contact', 'pages@contact')
app.get('/shop', 'products@index')

app.use('no-matching-route')
app.use('error-handler')

module.exports = functions.https.onRequest(app)