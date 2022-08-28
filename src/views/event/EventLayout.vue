<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'DetailEvent' }">Patient Details</router-link>
      |
      <router-link :to="{ name: 'VaccinatedEvent' }"
        >Vaccine Record</router-link
      >
      |
      <router-link :to="{ name: 'CommentEvent' }">Docter Comment</router-link>
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
