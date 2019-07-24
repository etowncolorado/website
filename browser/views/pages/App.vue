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
  <span :class="[$design.themes.light, $style.root, 'test-2']">
    <nav-1 :pages="$store.state.pages" />
    <router-view />
    <nav-2 :class="$style.footer" :pages="$store.state.pages" />
  </span>
</template>

<style module>
  .root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .footer {
    flex: 1;
  }
</style>
