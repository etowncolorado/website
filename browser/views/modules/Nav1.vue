<script>
  import Links1 from '@/views/components/Links1.vue'

  export default {
    components: {
      Links1
    },

    props: {
      isCompact: {
        type: Boolean,
        default: false
      },

      pages: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <header :class="$style.root">
    <router-link :class="$style.column" to="/">
      <img :class="$style.logo" src="@/assets/images/etown-logo.svg" alt="E-town Logo">
    </router-link>

    <links-1 v-if="!isCompact" :class="[$style.column, $style.nav]" :links="pages" />
  </header>
</template>


<style module>
  .root {
    display: flex;
    padding-top: 3rem;
    padding-bottom: 0.25rem;
    justify-content: center;
  }

  .column {
    width: 28rem;
    box-sizing: border-box;
  }

  .logo {
    height: 3.375rem;
  }

  .nav {
    padding: 0 2rem;
  }
</style>
