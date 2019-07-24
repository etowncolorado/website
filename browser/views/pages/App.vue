<script>
  import Screen from '@/support/screen/Screen.vue'
  import Nav1 from '@/views/modules/Nav1.vue'
  import Nav2 from '@/views/modules/Nav2.vue'

  // test-1

  export default {
    components: {
      Screen,
      Nav1,
      Nav2,
    },

    data () {
      return {
        foo: 2
      }
    },
  }
</script>

<template>
  <span class="light">
    <Screen />
    <Nav1 :pages="$store.state.pages" :is-compact="$store.getters.isCompact"/>
    <RouterView />
    <Nav2
      :class="$style.footer"
      :pages="$store.state.pages"
    />
  </span>
</template>

<style src="@/design/system.scss" lang="scss"></style>

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
