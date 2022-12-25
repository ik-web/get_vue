<template>
  <div class="posts">
    <h2 class="blockTitle">Posts</h2>
    <post-item v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
  components: {
    PostItem
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
</style>
