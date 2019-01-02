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
export default {
  name: "SearchForm",
  data() {
    return {
      id: ""
    };
  },
  methods: {
    async onSearch() {
      await this.$store.dispatch("search", { id: this.id });
    }
  }
};
</script>
