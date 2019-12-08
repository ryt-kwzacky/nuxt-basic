<template>
  <div>
    <button @click="counter">+1</button>
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    }
  }
}
</script>
