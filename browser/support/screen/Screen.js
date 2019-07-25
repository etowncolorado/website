// Module
export default {
  namespaced: true,

  state: () => ({
    size: {
      height: 800,
      width: 1200,
    }
  }),

  mutations: {
    resize: (state, size) => {
      state.size = size
    }
  },
}