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
  background: #000;
  color: #fff;
  display: flex;
  height: 120px;
}

.container {
  flex-wrap: wrap;
  justify-content: center;
}

.footer {
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}

@media (min-width: 576px) {
  .page-footer {
    height: 100px;
  }
  .footer {
    justify-content: flex-start;
    margin-top: 0;
  }
  .container {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>