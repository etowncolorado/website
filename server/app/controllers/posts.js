var firebase = require('../providers/firebase')

module.exports = {
  index (request, response) {
    response.render('posts/index')
  },

  async show (request, response, next) {
    try {
      var db = require('../providers/database')
      var key = request.params.key.slice(-3)
      var ref = db().ref('/posts').child(key)
      var post = await ref.once('value')
      var value = post.val()

      if (post.exists()) {
        response.render('posts/show', value)
      } else {
        next()
      }
    } catch (error) {
      next(error)
    }
  }
}