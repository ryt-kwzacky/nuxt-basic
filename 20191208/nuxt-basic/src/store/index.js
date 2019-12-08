export const state = () => ({
  count: 0,
  count2: 0
})

export const mutations = {
  increment(state) {
    state.count += 1
  },
  increment2(state) {
    state.count2 += 1
  }
}

export const actions = {
  incrementAction(store) {
    store.commit('increment2')
  }
}
