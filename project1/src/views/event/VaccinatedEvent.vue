<template>
  <h3>
    <a> ID: {{ event.id }} </a>
    <br />
    <a>
      Patient Name:
      {{ event.name + " " + event.surname }}
    </a>
  </h3>
  <div class="bg-box">
    <p>Vaccinate Status: {{ event.vaccinateStatus }}</p>
    <li>First-Dose: {{ event.firstDose }}</li>
    <li>Second-Dose: {{ event.secondDose }}</li>
  </div>
</template>

<script>
export default {
  props: ["id", "event"],
};
</script>
<style scoped>
.h3 {
  color: white;
}
.bg-box {
  background: white;
}
</style>
