var firebase = require('../providers/firebase')

module.exports = {
  index (request, response) {
    response.render('posts/index')
  },

  show (request, response) {
    var posts = firebase().database().ref('/posts')
    var post = posts.child(request.params.key)

    post.once('value')
      .then(
        () => response.send('asdfasf')
      )
      .catch(
        () => response.end('eeeeee')
      )

    // try {
    //   var data = await post.once('value')
    // } catch (error) {
    //   return response.end('asdfasdf')
    // }
    
    

    // if (!data.exists) {
    //   return next()
    // }

    // response.render('posts/show', data.val())
  }
}