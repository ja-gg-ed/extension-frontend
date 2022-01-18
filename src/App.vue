<template>
  <div class="container">
    <div class="flex justify-center items-center mt-4">
      <div class="relative rounded-sm shadow-sm w-full h-10">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            class="absolute text-primary h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          v-model="searchText"
          type="text"
          placeholder="Search"
          class="
            font-body
            block
            w-full
            ring-1 ring-gray-300
            pl-10
            py-2
            px-3
            text-gray-800
            rounded-md
            border border-gray-200
            focus:outline-none focus:ring-1 focus:ring-primary
            caret-teal-500
          "
        />
      </div>
      <button @click="fetchDataManual" class="btn">
        <i class="fa fa-sync-alt mr-1"></i>
        Fetch
      </button>
      <button @click="sortData" class="btn">
        <i class="fa fa-sort mr-1"></i>
        sort
      </button>
    </div>
    <!-- Cards -->
    <div v-if="matchingData.length">
      <div v-for="job in matchingData" :key="job.pipeline_id">
        <Card :job="job" />
      </div>
    </div>
    <div v-else>
      <h3 class="text-primary text-center text-4xl mt-4">No matches</h3>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  data() {
    return {
      jobs: [],
      searchText: "",
    };
  },
  components: {
    Card,
  },
  async created() {
    this.jobs = await this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("./finalData.json");
      const data = await res.json();
      return data.reverse();
    },
    async fetchDataManual() {
      this.jobs = await this.fetchData();
    },
    sortData() {
      this.jobs = this.jobs.reverse();
    },
  },
  computed: {
    matchingData() {
      return this.jobs.filter((item) =>
        item.pipeline_id.includes(this.searchText)
      );
    },
  },
};
</script>

<style>
</style>
