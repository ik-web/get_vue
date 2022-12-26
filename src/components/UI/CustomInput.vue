<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid teal;
}

.input::placeholder {
  font-size: 16px;
  font-style: italic;
  color: #c2c2c2;
}
</style>
