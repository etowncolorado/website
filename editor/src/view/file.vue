<script>
  export default {
    props: {
      root: {
        type: String,
        required: true
      },

      depth: {
        type: Number,
        default: 0
      }
    },

    computed: {
      file () {
        return this.$store.state.finder.files[this.root]
      },

      data () {
        return this.$store.state.finder.data[this.file.data]
      },

      isFolder () {
        return this.file.type === 0
      },

      style () {
        return {
          marginLeft: (this.depth * 10) + 'px'
        }
      }
    },

    methods: {
      createFile () {
        console.log('creatFile')
      },

      createFolder () {
        console.log('creatFolder')
      }
    }
  }
</script>

<template>
  <div v-if="file">
    <div v-bind:style="style">
      <span v-bind:class="$style.icon">xx</span>
      {{ file.name }}
      <span v-on:click="createFile"> file</span>
      <span v-on:click="createFolder"> folder</span>
    </div>
    <template v-if="isFolder">
      <file
        v-for="key in data"
        v-bind:key="key"
        v-bind:root="key"
        v-bind:depth="depth+1"
      />
    </template>
  </div>
</template>

<style module>
  .icon {
    margin-right: 4px;
  }
</style>
