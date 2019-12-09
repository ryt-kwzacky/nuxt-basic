<template>
  <div>
    <div>
      <button @click="counter">+1</button>
      <p>{{ $store.state.count }}</p>
    </div>
    <div>
      <button @click="counter2">+1</button>
      <p>{{ $store.state.count2 }}</p>
    </div>
    <div>
      <p>{{ $store.getters.getItems }}</p>
    </div>
    <div>
      <button @click="mapCounter">+2</button>
      <p>{{ $store.state.count3 }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'Vuex'

export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    },
    counter2() {
      this.$store.dispatch('incrementAction')
    },
    ...mapMutations({
      mapCounter: 'increment3'
    })
  }
}
</script>
