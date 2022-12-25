<template>
  <div class="posts" v-if="posts.length">
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>

  <div class="posts__hint" v-else>
    <h2>There is no any post</h2>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.posts__hint {
  margin-top: 60px;
  text-align: center;
  color: red;
}
</style>
