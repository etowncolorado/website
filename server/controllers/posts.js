var firebase = require('../providers/firebase')

module.exports = {
  index (request, response) {
    response.render('posts/index')
  },

  async show (request, response, next) {
    var key = request.params.key.slice(-3)
    var ref = firebase().database().ref('/posts').child(key)
    var post = await ref.once('value')

    if (post.exists()) {
      response.render('posts/show', post.val())
    } else {
      next()
    }
  }
}