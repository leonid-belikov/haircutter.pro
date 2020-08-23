<template>
  <div class="socnets">
    <a v-for="net in socnets"
       :key="net.url"
       class="socnet"
       :href="net.url"
       target="_blank"
       rel="noopener noreferrer">
      <component :is="net.icon"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "Socnets",
  data() {
    return {
      socnets: this.$store.getters.socnets,
    }
  }
}
</script>

<style scoped>

.socnets {
  display: flex;
  align-items: center;
}

.socnet {
  display: block;
}

.socnet:not(:last-child) {
  margin-right: 30px;
}

</style>