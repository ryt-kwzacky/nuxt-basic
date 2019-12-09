export const state = () => ({
  count: 0,
  count2: 0,
  items: [
    { name: 'itemA', price: 1500 },
    { name: 'itemB', price: 700 },
    { name: 'itemC', price: 2000 },
    { name: 'itemD', price: 300 },
    { name: 'itemE', price: 5000 }
  ]
})

export const getters = {
  getItems(state) {
    return state.items.filter((item) => item.price >= 1000)
  }
}

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
