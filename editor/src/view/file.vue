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

    data () {
      return {
        name: '',
        isCreating: false,
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

      pad () {
        return {
          paddingLeft: (this.depth * 10) + 'px'
        }
      },

      offset () {
        return {
          marginLeft: ((this.depth+1) * 10) + 'px'
        }
      }
    },

    methods: {
      createFile () {
        this.isCreating = true
        setTimeout(this.create, 1)
      },

      createFolder () {
        console.log('creatFolder')
      },

      create () {
        this.name = ''
        this.input = this.$el.querySelector('input')
        this.input.addEventListener('blur', this.blur)
        this.input.focus()
      },

      blur () {
        this.isCreating = false
        this.input.removeEventListener('blur', this.blur)
      },

      enter (event) {
        if (event.keyCode === 13) {
          this.$store.dispatch('finder/create', {
            name: this.name,
            data: this.file.data,
            files: this.data,
          })

          console.log('create', this.name)
          this.blur()
        }
      },

      rightClick (event) {
        console.log(event)
      }
    }
  }
</script>

<template>
  <div v-if="file">
    <div v-bind:style="pad" v-bind:class="$style.file" v-on:contextmenu.prevent="rightClick">
      <div v-bind:class="$style.icon">xx</div>
      <div>{{ file.name }}</div>
      <div v-if="isFolder" v-bind:class="$style.buttons">
        <div v-on:click="createFile">file</div>
        <div v-on:click="createFolder">folder</div>
      </div>
    </div>

    <div v-if="isFolder">
      <div v-if="isCreating" v-bind:style="offset" v-bind:class="$style.input">
        <span v-bind:class="$style.icon">xx</span>
        <input v-model="name" v-on:keydown="enter" />
      </div>

      <file
        v-for="key in data"
        v-bind:key="key"
        v-bind:root="key"
        v-bind:depth="depth+1"
      />
    </div>
  </div>
</template>

<style module>
  .icon {
    margin: 0 var(--space-2);
  }

  .file {
    display: flex;
  }

  .input {
    display: flex;
  }

  .input input {
    flex: 1;
  }

  .buttons {
    flex: 1;
    display: none;
    justify-content: flex-end;
  }

  .file:hover .buttons {
    display: flex;
  }

  .file:hover {
    background: var(--color-3);
  }
</style>
