<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeOption"
  >
    <option value="" selected  disabled>
      {{ defaultOptionName }}
    </option>

    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    modelValue: String,
    defaultOptionName: String,
    options: { type: Array, default: () => [] },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
  height: 40px;

  font-size: 16px;
  text-align: center;

  border: 1px solid teal;
}
</style>
