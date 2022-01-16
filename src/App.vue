<template>
  <div class="container">
    <div class="flex justify-center items-center mt-4">
      <Search />
      <button class="btn">
        <i class="fa fa-sync-alt mr-1"></i>
        Fetch
      </button>
      <button class="btn">
        <i class="fa fa-sort mr-1"></i>
        sort
      </button>
    </div>
    <!-- Cards -->
    <Card />
    <Card />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Search,
    Card,
  },
};
</script>

<style>
</style>
