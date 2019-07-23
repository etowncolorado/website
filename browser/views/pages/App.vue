<script>
  import Nav1 from '@/views/modules/Nav1.vue'
  import Nav2 from '@/views/modules/Nav2.vue'

  export default {
    components: {
      Nav1,
      Nav2,
    }
  }
</script>

<template>
  <span id="app">
    <nav-1 :pages="$store.state.pages" />
    <router-view />
    <nav-2 :pages="$store.state.pages" />
  </span>
</template>

<style>
  .root {
    display: block;
  }
</style>
