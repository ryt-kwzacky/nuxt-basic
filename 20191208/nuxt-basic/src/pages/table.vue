<template>
  <div>
    <h1>table page</h1>
    <button @click="fetch">fetch</button>
    fetched {{ length }} Items
    <table border="1">
      <tr>
        <th>Age</th>
        <th>User Number</th>
      </tr>
      <tr v-for="item in items" :key="item.age">
        <td>{{ item.age }}</td>
        <td>{{ item.users }}</td>
      </tr>
    </table>

    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr v-for="apiItem in apiItems" :key="apiItem">
        <td>{{ apiItem.name }}</td>
        <td>{{ apiItem.age }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

function getJson() {
  const ages = Array.from(
    new Set(
      new Array(parseInt(Math.random() * 100))
        .fill(null)
        .map(() => parseInt(Math.random() * 100))
    )
  )
  return ages.map((age) => ({
    age,
    users: Math.random() * 10000
  }))
}

export default {
  data: () => ({
    items: ''
  }),

  computed: {
    length() {
      return this.items.length
    }
  },

  async asyncData() {
    const { data } = await axios.get(process.env.microCmsUrl + '/test', {
      headers: { 'X-API-KEY': process.env.API_KEY }
    })
    return {
      apiItems: data.contents
    }
  },

  created() {
    this.fetch()
  },

  methods: {
    fetch() {
      this.items = getJson()
    }
  }
}
</script>
