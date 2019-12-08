<template>
  <div>
    <h1>_slug: {{ slug }}</h1>
    <p>{{ apiItems }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },

  async asyncData() {
    const { data } = await axios.get(process.env.microCmsUrl + '/test', {
      headers: { 'X-API-KEY': process.env.API_KEY }
    })
    return {
      apiItems: data.contents
    }
  }
}
</script>
