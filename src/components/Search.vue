<template>
  <div class="relative rounded-sm shadow-sm w-full">
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
      type="text"
      placeholder="Search"
      class="
        font-body
        block
        w-full
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
</template>

<script>
export default {
  name: "Search",
  props: ["searchText"],
};
</script>

<style>
</style>