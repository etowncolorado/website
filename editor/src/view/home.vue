<script>
  import server from '@/server.js'

  export default {
    methods: {
      logout () {
        server.auth().signOut()
      }
    }
  }
</script>

<template>
  <div :class="$style.home">
    <div :class="$style.info">
      <h1>HOME</h1>
      <div>{{ $store.state.auth.user }}</div>
      <button @click="logout">Logout</button>
    </div>
    <div :class="$style.content">
      content
    </div>
  </div>
</template>

<style module>
  body {
    margin: 0;
    overflow: hidden;
  }

  .home {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: stretch;
  }

  .info {
    width: 200px;
  }

  .content {
    flex: 1;
    background: green;
  }
</style>


