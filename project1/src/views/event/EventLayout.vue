<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'DetailEvent' }">Patient Details</router-link>
      |
      <router-link :to="{ name: 'VaccinatedEvent' }"
        >Vaccine Record</router-link
      >
      |
      <router-link :to="{ name: 'CommentEvent' }">Docter Comment</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "event" },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>
