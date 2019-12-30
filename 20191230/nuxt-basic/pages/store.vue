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
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      counter: 'increment',
      counter2: 'increment2'
    })
  }
}
</script>
