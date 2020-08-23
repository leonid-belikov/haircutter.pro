<template>
  <div class="page-footer">
    <div class="container">
      <nav-menu prop-class="footer"/>
      <socnets/>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
import Socnets from "@/components/common/Socnets";

export default {
name: "PageFooter",
  components: {Socnets, NavMenu},
}
</script>

<style scoped>
.page-footer {
  height: 100px;
  background: black;
  color: #fff;
  display: flex;
}

.container {
  justify-content: space-between;
}
</style>