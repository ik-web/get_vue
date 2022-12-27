<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button'
};
</script>

<style scoped>
.button {
  width: 100%;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;

  text-transform: uppercase;

  border: 1px solid teal;
  color: white;
  background: teal;
  cursor: pointer;
  transition: all 0.15s ease-in;
}

.button:hover,
.button:focus {
  background: cyan;
  border-color: cyan;
}
</style>
