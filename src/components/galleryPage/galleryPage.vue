<template>
  <div class="page gallery-page">
    <h2 class="page-header">
      {{this.$t("gallery")}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "galleryPage",
  mounted() {
    const bodyWidth = document.body.offsetWidth
    if (bodyWidth === window.innerWidth) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }
}
</script>

<style scoped>
.gallery-page {
}
</style>