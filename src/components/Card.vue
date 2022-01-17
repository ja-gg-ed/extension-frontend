<template>
  <div>
    <div
      class="
        bg-white
        mt-3
        rounded
        p-2
        overflow-auto
        transition
        ease-linear
        shadow-md
      "
    >
      <table class="border-collapse table-auto w-full mx-auto">
        <thead class="text-sm text-gray-400">
          <tr>
            <th class="border border-gray-200 px-2">Pipeline ID</th>
            <th class="border border-gray-200 px-2">City</th>
            <th class="border border-gray-200 px-2">Job Type</th>
            <th class="border border-gray-200 px-2">Tiles to Process</th>
            <th class="border border-gray-200 px-2">
              Tiles Processed<br />Success
            </th>
            <th class="border border-gray-200 px-2">
              Tiles Processed<br />Failed
            </th>
            <th class="border border-gray-200 px-2">
              Lots to<br />be Processed
            </th>
            <th class="border border-gray-200 px-2">
              Lots to<br />be Extended
            </th>
            <th class="border border-gray-200 px-2">Lots Processed</th>
            <th class="border border-gray-200 px-2">
              Lots Extension<br />Successful
            </th>
            <th class="border border-gray-200 px-2">
              Lots Extension<br />Failed
            </th>
            <th class="border border-gray-200 px-2">
              Lots assoc.<br />Successful
            </th>
            <th class="border border-gray-200 px-2">Lots assoc.<br />Failed</th>
            <th class="border border-gray-200 px-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">
              EEU_SAINT_PETERSBURG
            </td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td class="text-sm text-gray-600 text-center px-1 border">88</td>
            <td
              class="
                text-sm text-gray-600 text-center
                px-1
                border
                uppercase
                font-semibold
              "
            >
              Details
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-2">
        <div>Failed Tiles: 1265959599595</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
</style>