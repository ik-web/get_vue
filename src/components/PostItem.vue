<template>
  <div class="post">
    <div>
      <div class="post__title"><strong>Title:</strong> {{ post.title }}</div>
      <div class="post__body"><strong>body:</strong> {{ post.body }}</div>
    </div>

    <div>
      <custom-button>Delete</custom-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 4px double teal;
  padding: 16px;
}
.post__title {
  margin-bottom: 12px;
}
</style>
