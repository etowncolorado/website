<script>
  export default {
    props: {
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

    <nav :class="[$style.column, $style.nav]">
      <router-link v-for="page in pages" :class="$style.link" :to="page.path" :key="page.path" :exact-active-class="$style.active">
        {{ page.label }}
      </router-link>
    </nav>
  </header>
</template>


<style module>
  .root {
    display: flex;
    padding-top: 3rem;
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
    display: flex;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    color: var(--foreground-color);
    font-family: "Montserrat", sans-serif;
  }

  .active:after {
    left: 0;
    right: 0.125rem;
    bottom: 0.125rem;
    height: 0.125rem;
    content: " ";
    position: absolute;
    background: #c02727;
  }
</style>
