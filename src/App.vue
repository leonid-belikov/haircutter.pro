<template>
  <div>
    <nav-header/>
    <div class="content">
        <div class="container">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
    </div>
    <page-footer/>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import PageFooter from "@/components/PageFooter";

export default {
  name: 'App',
  components: {
    PageFooter,
    NavHeader,
  }
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 220px);
  background: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: 200ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
