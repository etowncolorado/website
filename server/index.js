const functions = require('firebase-functions')
const request = require('request-promise')
const admin = require('firebase-admin')
const app = admin.initializeApp()

exports.request = functions.https.onRequest(
  async (request, response) => {
    // if (request.path.slice(-3) === '.js') {
    //   var bundle = await require('rollup').rollup({ input: 'main.js' });
    //   var output = await bundle.generate({ format: 'cjs' });
    //   return response.send(output);
    // }

    try {
      var render = require('./views/' + request.path);
    } catch (error) {
      var render = (path) => `Not Found [${path}]`;
    }

    var result = render(request.path);

    response.send(result);
  }
)

exports.purge = functions.storage.object().onFinalize(
  (object) => request(
    `https://etowncolorado-content.web.app/${object.name}`,
    {
      method: 'PURGE'
    }
  )
)

exports.content = functions.https.onRequest(
  (request, response) => {
    if (request.method.toLowerCase() !== 'get') {
      return response.status(404).send()
    }

    if (request.path === '/timestamp') {
      response.set({
        'Cache-Control': 'public, max-age=300, s-maxage=31536000'
      })

      return response.send(`${Date.now()}`)
    }

    const file = app.storage().bucket().file(request.path)

    const resolve = (metadata) => {
      response.set({
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300, s-maxage=31536000',
        'Content-Type': metadata[0].contentType
      })

      file.createReadStream().pipe(response)
    }

    const reject = (error) => {
      response.status(404).send()
    }

    file.getMetadata().then(resolve).catch(reject)
  }
)