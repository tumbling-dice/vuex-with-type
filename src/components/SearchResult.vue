<template>
  <table v-if="result.length > 0">
    <thead>
      <th>ID</th>
      <th>Name</th>
    </thead>
    <tbody>
      <tr v-for="item in result" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SearchResult",
  computed: {
    result() {
      return this.$store.state.search.result;
    }
  }
};
</script>
