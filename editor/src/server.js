import firebase from 'firebase/app'
import 'firebase/auth'

export default firebase.initializeApp({
  apiKey: "AIzaSyBySZNEwPsMIFCJL8bXo8zYv-MSFEOaWII",
  authDomain: "etowncolorado-website.firebaseapp.com",
  databaseURL: "https://etowncolorado-website.firebaseio.com",
  projectId: "etowncolorado-website",
  storageBucket: "etowncolorado-website.appspot.com",
  messagingSenderId: "155712937603",
  appId: "1:155712937603:web:e624e9971e7cf05d"
})

// export const authChange = (method) => auth.onAuthStateChanged(method)
// export const authGoogle = () => new firebase.auth.GoogleAuthProvider()
// export const authLogin = (provider) => auth.signInWithPopup(provider)