<template>
  <div class="page events-page">
    <h2 class="page-header">
      {{this.$t("events")}}
    </h2>
  </div>
</template>

<script>
import {checkBodyWidth} from "@/utils/helpers";

export default {
  name: "eventsPage",
  mounted() {
    checkBodyWidth()
  }
}
</script>

<style scoped>
.events-page {
}
</style>