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
    color: inherit;
  }
</style>

