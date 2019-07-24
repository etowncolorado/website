// Module
export default {
  namespaced: true,

  state: () => ({
    height: 800,
    width: 1200,
  }),

  mutations: {
    resize: (state, size) => {
      state.height = size.height
      state.width = size.width
    }
  },
}