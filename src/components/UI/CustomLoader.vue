<template>
  <h3 class="loader">
    Data is loading...
  </h3>
</template>

<script>
export default {
  name: "custom-loader",
};
</script>

<style scoped>
  .loader {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
