

<template>
  <footer :class="$style.container">
    <section :class="$style.section">
      <form-1 :class="$style.area"/>

      <nav :class="[$style.area, $style.links]">
        <router-link
          v-for="link in $store.state.pages"
          v-text="link.label"
          :to="link.path"
          :key="link.path"
          :class="$style.link"
          :exact-active-class="$style.active"
        />
      </nav>
    </section>

    <section :class="$style.section">
      <div :class="$style.area">
        Facebook
      </div>

      <div :class="$style.area">
        Contacts
      </div>
    </section>
  </footer>
</template>

<script>
  import Form1 from '@/views/components/Form1.vue'

  export default {
    components: {
      Form1,
    }
  }
</script>

<style module>
  .container {
    /* graphics */
    background-color: #000;

    /* layout */
    padding-bottom: 4rem;
    padding-top: 3rem;

    /* typography */
    color: #fff;
  }

  .section {
    /* layout */
    justify-content: center;
    display: flex;
  }

  .area {
    /* layout */
    box-sizing: border-box;
    padding: 0 2rem;
    width: 28rem;
  }
</style>