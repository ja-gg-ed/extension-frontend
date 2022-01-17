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
        scrollbar
      "
    >
      <table class="border-collapse table-auto w-full mx-auto">
        <thead class="text-xs text-gray-400">
          <tr>
            <th class="table-head">Pipeline ID</th>
            <th class="table-head">City</th>
            <th class="table-head">Job Type</th>
            <th class="table-head">Tiles to Process</th>
            <th class="table-head">Tiles Processed<br />Success</th>
            <th class="table-head">Tiles Processed<br />Failed</th>
            <th class="table-head">Lots to<br />be Processed</th>
            <th class="table-head">Lots to<br />be Extended</th>
            <th class="table-head">Lots Processed</th>
            <th class="table-head">Lots Extension<br />Successful</th>
            <th class="table-head">Lots Extension<br />Failed</th>
            <th class="table-head">Lots assoc.<br />Successful</th>
            <th class="table-head">Lots assoc.<br />Failed</th>
            <th class="table-head"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tablerow font-bold">521734</td>
            <td class="tablerow">EEU_SAINT_PETERSBURG</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow"><span class="failed">15</span></td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow">88</td>
            <td class="tablerow uppercase font-semibold">
              <span
                @click="showDetails"
                class="
                  text-xs
                  tracking-widest
                  bg-primary
                  px-2
                  py-1
                  rounded
                  text-white
                  cursor-pointer
                  hover:shadow-md hover:bg-teal-600
                "
                >Details</span
              >
            </td>
          </tr>
        </tbody>
      </table>
        <div
          v-if="showDetailCard"
          class="
            mt-2
            rounded
            bg-gray-100
            px-2
            ring-1 ring-gray-300
            transition
            ease-in
          "
        >
          <div class="flex justify-center border-b border-header">
            <span
              class="
                font-medium
                text-gray-500 text-center
                uppercase
                text-md
                tracking-widest
              "
              >Details
            </span>
          </div>
          <div class="">
            <div class="mt-2 flex">
              <div
                class="
                  text-sm
                  flex
                  justify-between
                  items-center
                  font-medium
                  border-b border-gray-200
                "
              >
                <span class="text-red-700"
                  >Failed Tiles: 1265959599595 1265959599595 1265959599595
                  1265959599595 1265959599595 1265959599595 1265959599595
                  1265959599595 1265959599595 1265959599595 1265959599595
                  1265959599595 1265959599595 1265959599595 1265959599595
                  1265959599595 1265959599595 1265959599595 1265959599595
                </span>
                <span
                  class="
                    text-xs text-center
                    bg-yellow-400
                    text-gray-800
                    px-2
                    py-1
                    w-28
                    uppercase
                    rounded-md
                    tracking-wide
                    cursor-pointer
                    hover:bg-yellow-600 hover:text-white
                  "
                  >Run Job</span
                >
              </div>
            </div>
            <div class="mt-1">
              <div class="flex justify-between items-center w-full mt-1">
                <span class="font-medium text-sm text-gray-500 uppercase"
                  >Cause:</span
                >
                <span class="font-medium text-sm text-gray-500 uppercase"
                  >Duration:
                </span>
                <span class="font-medium text-sm text-gray-500 uppercase"
                  >Date:</span
                >
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      showDetailCard: false,
    };
  },
  props: Object,
  methods: {
    showDetails() {
      this.showDetailCard = !this.showDetailCard;
    },
  },
};
</script>

<style>

</style>