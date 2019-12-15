<template>
  <div>
    <child message1="Hello Vue!!"></child>
  </div>
</template>

<script>
import Child from '~/components/Child.vue'

export default {
  components: {
    Child
  }
}
</script>
