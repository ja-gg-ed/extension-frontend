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
            <th class="table-head w-60">City</th>
            <th class="table-head">Job Type</th>
            <th class="table-head">Tiles to Process</th>
            <th class="table-head">Tiles Processed<br />Success</th>
            <th class="table-head">Tiles Processed<br />Failed</th>
            <th class="table-head">Lots to<br />be Processed</th>
            <th class="table-head">Lots to<br />be Extended</th>
            <th class="table-head">Lots Processed</th>
            <th class="table-head">Lots assoc.<br />Successful</th>
            <th class="table-head">Lots assoc.<br />Failed</th>
            <th class="table-head">Lots Extension<br />Successful</th>
            <th class="table-head">Lots Extension<br />Failed</th>
            <th class="table-head"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tablerow font-bold">{{ job.pipeline_id }}</td>
            <td class="tablerow">{{ job.city }}</td>
            <td class="tablerow">{{ job.job_type }}</td>
            <td class="tablerow">{{ job.report.tiles_to_process }}</td>
            <td class="tablerow">{{ job.report.tiles_processed_success }}</td>
            <td class="tablerow">
              <span
                :class="{ failed: job.report.tiles_processed_failed > 0 }"
                >{{ job.report.tiles_processed_failed }}</span
              >
            </td>
            <td class="tablerow">{{ job.report.lots_to_be_processed }}</td>
            <td class="tablerow">{{ job.report.lots_to_be_extended }}</td>
            <td class="tablerow">{{ job.report.lots_processed }}</td>
            <td class="tablerow">
              {{ job.report.lots_association_successful }}
            </td>
            <td class="tablerow">{{ job.report.lots_association_fail }}</td>
            <td class="tablerow">{{ job.report.lots_extension_successful }}</td>
            <td class="tablerow">{{ job.report.lots_extension_failed }}</td>

            <td class="tablerow uppercase font-semibold w-24">
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
                >{{ showDetailCard ? "Hide" : "Details" }}</span
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
              text-xs
              tracking-widest
            "
            >Details
          </span>
        </div>
        <div class="">
          <div class="mt-2">
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
              <span class="text-gray-600 mr-2">Failed Tiles: </span>
              <span id="failedTiles ml-2" class="text-red-700">{{
                job.report.failed_tiles.join(" ")
              }}</span>
              <span
                @click="runJob"
                class="
                  text-xs text-center
                  ml-auto
                  bg-yellow-400
                  text-gray-800
                  px-2
                  py-1
                  w-28
                  mb-1
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
              <span class="font-medium text-xs text-gray-500 uppercase"
                >Cause: {{ job.cause }}</span
              >
              <span class="font-medium text-xs text-gray-500 uppercase"
                >Duration: {{ job.duration }}
              </span>
              <span class="font-medium text-xs text-gray-500 uppercase"
                >Date: {{ job.date }}</span
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
  props: {
    job: Object,
  },
  methods: {
    showDetails() {
      this.showDetailCard = !this.showDetailCard;
    },
    runJob() {
      var r = document.createRange();
      r.selectNode(document.getElementById("failedTiles"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      window.open(
        "https://main.gitlab.in.here.com/3dds/vtt/p3dc-production-jobs/correct-p3dc-lots-for-tiles/-/pipelines/new"
      );
    },
  },
};
</script>

<style>
</style>