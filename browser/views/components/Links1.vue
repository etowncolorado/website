<script>
  export default {
    props: {
      links: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <nav :class="$style.root">
    <router-link
      v-for="link in links"
      v-text="link.label"
      :to="link.path"
      :key="link.path"
      :class="$style.link"
      :exact-active-class="$style.active"
    />
  </nav>
</template>

<style module>
  .root {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    color: inherit;
    position: relative;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 2rem;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
  }

  .active:after {
    left: 0;
    right: 0.125rem;
    bottom: 0.125rem;
    height: 0.125rem;
    content: " ";
    position: absolute;
    background: var(--accent-color);
  }
</style>

