<template>
  <div class="post">
    <div>
      <h4 class="post__number">№{{ post.id }}</h4>
      <div class="post__title"><strong>Title:</strong> {{ post.title }}</div>
      <div class="post__body">
        <strong>Description:</strong> {{ post.body }}
      </div>
    </div>

    <div>
      <custom-button @click="$emit('remove', post)">Delete</custom-button>
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
  gap: 12px;
  
  width: 100%;

  background: white;
  border: 4px double teal;
  padding: 16px;
}

.post__number {
  margin-bottom: 12px;
}

.post__title {
  margin-bottom: 12px;
}
</style>
