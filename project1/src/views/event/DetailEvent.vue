<template>
  <h3>Name: {{ event.name + " " + event.surname }}</h3>
  <p>Age: {{ event.age }}</p>
  <p>Hometown: {{ event.homeTown }}</p>
</template>

<script>
export default {
  props: ["id", "event"],
};
</script>
