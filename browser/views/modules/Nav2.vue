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
  <footer :class="$style.root">
    <section :class="$style.column">
      <div>
        Facebook
      </div>
    </section>

    <section :class="$style.column">
      <nav>
        <router-link v-for="page in pages" :to="page.path" :key="page.path">
          {{ page.label }}
        </router-link>
      </nav>
    </section>
  </footer>
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
</style>