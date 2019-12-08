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
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    },
    counter2() {
      this.$store.dispatch('incrementAction')
    }
  }
}
</script>
