<template>
  <div id="app">
    <search-form/>
    <search-result/>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
export default {
  name: "App",
  components: {
    SearchForm,
    SearchResult
  }
};
</script>
