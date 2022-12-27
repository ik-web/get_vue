<template>
  <div class="buttons">
    <custom-button
      v-for="pageNumber in totalPages"
      @click="changePage(pageNumber)"
      class="button"
      :class="{button_current: page === pageNumber}"
    >
      {{ pageNumber }}
    </custom-button>
  </div>
</template>

<script>
export default {
  name: "custom-pagination",
  props: {
    page: Number,
    totalPages: Number,
  },
  methods: {
    changePage(page) {
      this.$emit('update', page);
    }
  }
};
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 4px;
}

.button {
  width: 40px;
  border-radius: 50%;
}

.button_current {
  background: cyan;
}
</style>
