<template>
  <h3>Name: {{ event.name + " " + event.surname }}</h3>
  <p>Vaccinate Status: {{ event.vaccinateStatus }}</p>
  <p>+ First-Dose: {{ event.firstDose }}</p>
  <p>+ Second-Dose: {{ event.secondDose }}</p>
</template>

<script>
export default {
  props: ["id", "event"],
};
</script>
