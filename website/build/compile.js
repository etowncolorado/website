var dom = require('./dom.js')

var html = document.createElement('html')
var body = document.createElement('body')
var h1 = document.createElement('h1')
var h2 = document.createElement('h2')
var text = document.createTextNode('Hello, World!')

html.appendChild(body)
body.appendChild(h1)
body.appendChild(h2)
h1.appendChild(text)

console.log(html.toString())

h2.appendChild(text)

console.log(html.toString())
