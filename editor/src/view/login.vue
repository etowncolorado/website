<script>
  import firebase from 'firebase/app'
  import server from '@/server.js'

  export default {
    methods: {
      login (event) {
        server.auth().signInWithPopup(
          new firebase.auth.GoogleAuthProvider()
        )
      }
    }
  }
</script>

<template>
  <div>
    <h1>
      Login Page
    </h1>

    <div v-if="$store.state.auth.user">
      Unauthorized
    </div>

    <button @click="login">
      Login
    </button>
  </div>
</template>
