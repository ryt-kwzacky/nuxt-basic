<template>
  <div>
    <h1>table page</h1>
    <button @click="fetch">fetch</button>
    fetched {{ length }} Items
    <div v-for="item in items" :key="item">
      <Table
        :left-Column-Title="'Age'"
        :right-Column-Title="'User Number'"
        :number1="item.age"
        :number2="item.users"
      >
      </Table>
    </div>

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
import Table from '@/components/Table.vue'

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
    const { data } = await axios.get(
      'https://rytkwsk-test.microcms.io/api/v1/test',
      {
        headers: { 'X-API-KEY': '25acf25c-acef-4cfc-9091-72a276683f6a' }
      }
    )
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
  },

  components: {
    Table
  }
}
</script>
