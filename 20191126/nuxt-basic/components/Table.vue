<template>
  <div>
    <table border="1">
      <tr>
        <th>{{ leftColumnTitle }}</th>
        <th>{{ rightColumnTitle }}</th>
      </tr>
      <tr>
        <td>{{ number1 }}</td>
        <td>{{ number2 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    leftColumnTitle: {
      type: String,
      default: 'left column',
      required: true
    },
    rightColumnTitle: {
      type: String,
      default: 'right column',
      required: true
    },
    number1: {
      type: String,
      default: 'number1',
      required: true
    },
    number2: {
      type: String,
      default: 'number1',
      required: true
    }
  }
}
</script>
