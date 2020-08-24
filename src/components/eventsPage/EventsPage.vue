<template>
  <div class="page events-page">

    <section class="event-list">
      <event-post
          v-for="event in events"
          :event="event"
          :key="event.name"/>
    </section>

  </div>
</template>

<script>
import {checkBodyWidth} from "@/utils/helpers";
import EventPost from "@/components/eventsPage/EventPost";

export default {
  name: "EventsPage",
  components: {
    EventPost,
  },
  computed: {
    events() {
      return this.$store.getters.events
    },
  },
  mounted() {
    checkBodyWidth()
  }
}
</script>

<style scoped>
.events-page {
}

.event-list {
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
}

</style>