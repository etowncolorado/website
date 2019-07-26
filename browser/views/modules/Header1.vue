<template>
  <header :class="$style.container">
    <router-link :class="$style.logo" to="/">
      <img src="@/assets/images/etown-logo.svg" alt="E-town Logo">
    </router-link>

    <nav :class="$style.links">
      <router-link
        v-for="link in $store.state.pages"
        v-text="link.label"
        :to="link.path"
        :key="link.path"
        :class="$style.link"
        :exact-active-class="$style.active"
      />
    </nav>
  </header>
</template>

<style module>
  .container {
    /* layout */
    justify-content: center;
    padding-bottom: 0.25rem;
    padding-top: 3rem;
    display: flex;
  }

  .logo {
    /* layout */
    width: 28rem;
  }

  .logo img {
    /* layout */
    height: 3.375rem;
  }

  .links {
    /* layout */
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2rem;
    display: flex;
    width: 28rem;
  }

  .link {
    /* position */
    position: relative;

    /* typography */
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    font-weight: 700;
    font-size: 0.8125rem;
    color: inherit;
  }

  .active:after {
    /* graphics */
    background-color: #c02727;
    content: ' ';

    /* position */
    position: absolute;
    height: 0.125rem;
    bottom: 0.125rem;
    right: 0.125rem;
    left: 0;
  }
</style>
