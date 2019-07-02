module.exports = {
  about (request, response) {
    response.render('pages/about')
  },

  menu (request, response) {
    response.render('pages/menu')
  },

  contact (request, response) {
    response.render('pages/contact')
  }
}
