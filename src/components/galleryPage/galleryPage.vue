<template>
  <div class="page gallery-page">
    <h2 class="page-header">
      {{this.$t("gallery")}}
    </h2>
  </div>
</template>

<script>
import {checkBodyWidth} from "@/utils/helpers";

export default {
  name: "galleryPage",
  mounted() {
    checkBodyWidth()
  }
}
</script>

<style scoped>
.gallery-page {
}
</style>