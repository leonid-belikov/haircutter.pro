<template>
  <div class="nav-header">
    <div class="container">
      <router-link to="/" exact tag="div" class="logo">
        <img src="/img/logo_white.png" alt="">
        <h1>haircutter.pro</h1>
      </router-link>
      <nav-menu prop-class="header"/>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
export default {
  name: "NavHeader",
  components: {NavMenu}
}
</script>

<style scoped>
.nav-header {
  height: 120px;
  background: black;
  color: #fff;
  display: flex;
}

.logo {
  cursor: pointer;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.logo h1 {
  font-family: 'Work Sans', 'Montserrat', sans-serif;
  font-weight: 700;
}

</style>