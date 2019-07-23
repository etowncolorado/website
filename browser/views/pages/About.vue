<script>
  import title from '@/mixins/title.js'

  export default {    
    mixins: [
      title
    ],

    created () {
      this.setTitle('e|town')
    }
  }
</script>

<template>
  <div :class="[$design.themes.dark, $style.root]">
    <div>
      <h1>This is an about page</h1>
    </div>
    
    <div>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<style module>
  .root {
    color: var(--foreground-color);
    display: flex;
    background: var(--background-color);
    justify-content: center;
  }

  .root div {
    width: 600px;
    padding: 0 20px;
    display: inline-block;
    background: blue;
    box-sizing: border-box;
  }
</style>
