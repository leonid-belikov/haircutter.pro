<template>
  <div class="page-footer">
    <div class="container">
      <nav-menu prop-class="footer"/>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
export default {
name: "PageFooter",
  components: {NavMenu}
}
</script>

<style scoped>
.page-footer {
  height: 100px;
  background: black;
  color: #fff;
  display: flex;
}
</style>