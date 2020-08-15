<template>
  <div id="main">
    <nav-header/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";

export default {
  name: 'App',
  components: {
    NavHeader,
  }
}
</script>

<style>
  #main {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
</style>
