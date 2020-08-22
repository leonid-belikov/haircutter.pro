<template>
  <div class="page about-page">
    <h2 class="page-header">
      {{this.$t("about")}}
    </h2>
  </div>
</template>

<script>
  export default {
    name: "homePage",
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
.about-page {
}
</style>