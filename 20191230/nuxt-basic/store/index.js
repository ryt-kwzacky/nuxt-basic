export const state = () => ({
  count: 0,
  count2: 0
})

export const mutations = {
  // count1の更新もcount2の更新も一箇所に集まる
  increment(state) {
    state.count += 1
  },
  increment2(state) {
    state.count2 += 1 // Go to state
  }
}

export const actions = {
  incrementAction(store) {
    store.commit('increment2') // Go to mutations
  }
}
