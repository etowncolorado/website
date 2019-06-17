<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    // mounted () {
    
    // }
    // computed: {
    //   ...mapState('finder', ['files'])
    // },

    // data () {
    //   return {
    //     selection: 'about'
    //   }
    // },

    // methods: {
    //   ...mapActions('finder', ['create', 'trash']),

    //   select (key) {
    //     this.selection = key
    //   }
    // }
  }
</script>


<template>
  <div v-bind:class="[$style.system, $style.module]">
    <finder root="-LhX-Bwwy9v1K5zpJw9s" />
  </div>
  <!-- <div :class="[$style.system, $style.module]" >
    <editor
      v-bind:active="selection"
      v-bind:files="files"
      v-on:select="select"
      v-on:create="create('untitled')"
      v-on:close="trash"
    />
  </div> -->
</template>

<style module>
  body {
    width: 100vw;
    height: 100vw;
    margin: 0;
    overflow: hidden;
  }

  .system {
    --color-1: #FFF;
    --color-2: #000;
    --color-3: #CCC;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 4rem;
    --space-8: 8rem;
  }

  .module {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .viewport {
    flex: 1;
  }
</style>

