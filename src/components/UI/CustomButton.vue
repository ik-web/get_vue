<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  width: 100%;
  padding: 12px;
  border: 1px solid teal;
  color: white;
  background: teal;
  cursor: pointer;
  transition: all 0.15s ease-in;
}

.button:hover,
.button:focus {
  color: black;
  background: cyan;
}
</style>
