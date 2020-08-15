<template>
  <div class="nav-header">
    <router-link to="/">home</router-link>
    <router-link to="/gallery">gallery</router-link>
    <router-link to="/events">events</router-link>
  </div>
</template>

<script>
export default {
  name: "NavHeader"
}
</script>

<style scoped>
  .nav-header {
    height: 100px;
    background: red;
  }
</style>