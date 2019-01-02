<template>
  <div>
    <label>
      ID:
      <input type="text" @input="id = $event.target.value">
    </label>
    
    <button @click.prevent="onSearch">Search</button>
  </div>
</template>

<script>
import store, { SearchAction } from "../store/index.js";
export default {
  name: "SearchForm",
  data() {
    return {
      id: ""
    };
  },
  methods: {
    async onSearch() {
      await store.dispatch(new SearchAction.Search(this.id));
    }
  }
};
</script>
