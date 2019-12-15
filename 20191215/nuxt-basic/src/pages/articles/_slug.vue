<template>
  <div>
    <h1>_slug: {{ slug }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
