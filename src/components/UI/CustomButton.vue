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
  padding: 12px;

  text-transform: uppercase;

  border: 1px solid teal;
  color: white;
  background: teal;
  cursor: pointer;
  transition: all 0.15s ease-in;
}

.button:hover,
.button:focus {
  background: #00a5a5;
  border-color: #00a5a5;
}
</style>
