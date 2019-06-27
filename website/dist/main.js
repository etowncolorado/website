var auth = (user) => {
  console.log('user', user)
}

var login = (app) => (event) => {
  var provider = new firebase.auth.GoogleAuthProvider()

  app.auth().signInWithPopup(provider)
}

var init = (event) => {
  var app = firebase.app()
  app.auth().onAuthStateChanged(auth)

  var button = document.body.appendChild(
    document.createElement('button')
  )

  button.innerText = 'Login'

  button.addEventListener('click', login(app))

  console.log(firebase.auth.GoogleAuthProvider)
}

document.addEventListener('DOMContentLoaded', init)