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
import { searchState } from "../store/index.js";

export default {
  name: "SearchResult",
  computed: {
    result() {
      return searchState.result;
    }
  }
};
</script>
