<script>
  // Vendor
  import debounce from 'lodash/debounce'

  // Component
  export default {
    props: {
      delay: {
        type: Number,
        default: 0,
      },
    },

    mounted () {
      this.resize()

      if (this.delay) {
        this.resize = debounce(this.resize, this.delay)
      }

      window.addEventListener('resize', this.resize)
    },

    unmounted () {
      window.removeEventListener('resize', this.resize)
    },

    render () {},

    methods: {
      resize () {
        this.$store.commit('screen/resize', {
          height: window.innerHeight,
          width: window.innerWidth,
        })
      },
    },
  }
</script>