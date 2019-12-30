<template>
  <div>
    <p>message1: {{ message1 }}</p>
    <p>message2: {{ message2 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message1: {
      type: String,
      default: 'Message1',
      required: true
    },
    message2: {
      type: String,
      default: 'Message2',
      required: false
    }
  }
}
</script>
