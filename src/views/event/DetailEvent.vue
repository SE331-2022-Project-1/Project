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
    <p>Age: {{ event.age }}</p>
    <p>Hometown: {{ event.homeTown }}</p>
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
