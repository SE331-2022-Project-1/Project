<template>
  <div class="networkError">
    <h1>Sorry!</h1>

    <h3>
      It looks like you're experiencing some network issues.
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>
