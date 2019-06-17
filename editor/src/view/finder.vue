<script>
  export default {
    props: {
      root: {
        type: String,
        required: true
      }
    },

    computed: {
      file () {
        return this.$store.state.finder.files[this.root]
      },

      data () {
        return this.$store.state.finder.data[this.file.data]
      }
    }
  }
</script>

<template>
  <div v-bind:class="$style.explorer">
    <div v-bind:class="$style.header">
      <div>explorer</div>
    </div>

    <div v-if="file" v-bind:class="$style.list">
      <file v-bind:root="root" />
    </div>
  </div>
</template>

<style module>
  .explorer {
    width: 200px;
    background: green;
  }

  .header {
    display: flex;
    padding: 6px 12px;
    justify-content: space-between;
  }

  .list {
    padding: 20px;
    user-select: none;
  }

  .item {
    color: blue;
  }
</style>


