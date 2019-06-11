var functions = require('firebase-functions')


exports.request = functions.https.onRequest(
  async (request, response) => {
    if (request.path.slice(-3) === '.js') {
      var bundle = await require('rollup').rollup({ input: 'main.js' });
      var output = await bundle.generate({ format: 'cjs' });
      return response.send(output);
    }

    try {
      var render = require('./views/' + request.path);
    } catch (error) {
      var render = (path) => `Not Found [${path}]`;
    }

    var result = render(request.path);

    response.send(result);
  }
)