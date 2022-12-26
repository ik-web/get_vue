<template>
  <div class="posts" v-if="posts.length">
    <TransitionGroup name="list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
