<script>
  export default {
    data () {
      return {
        selection: 'about'
      }
    },

    methods: {
      select (value) {
        this.selection = value
      }
    }
  }
</script>


<template>
  <div :class="$style.app" >
    <explorer :class="$style.explorer" :selection="selection" @select="select" />
    <viewport :class="$style.viewport" :file="selection"/>
  </div>
</template>

<style module>
  body {
    width: 100vw;
    height: 100vw;
    margin: 0;
    overflow: hidden;
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .viewport {
    flex: 1;
  }
</style>

