module.exports = (request, response, next) => {
  var chunks = []
  var write = response.write
  var end = response.end;

  response.write = function (chunk) {
    chunks.push(chunk)
    write.apply(response, arguments)
  };

  response.end = function (chunk) {
    if (chunk) {
      chunks.push(chunk)
    }

    var body = Buffer.concat(chunks).toString('utf8')

    console.log(request.path, body);

    end.apply(response, arguments);
  };

  next()
}