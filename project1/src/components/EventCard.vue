<template>
  <div class="event-card">
    <router-link :to="{ name: 'EventLayout', params: { id: event.id } }">
      <a>ID:{{ event.id }} </a>
      <span> - {{ event.name }} {{ event.surname }}</span>
      <h4>"{{ event.vaccinateStatus }}"</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
  background: white;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
