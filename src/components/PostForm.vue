<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Add post</h2>

    <custom-input
      type="text"
      placeholder="Post title"
      v-model="post.title"
    />

    <custom-input
      type="text"
      placeholder="Post description"
      v-model="post.body"
    />

    <custom-button @click="addPost">Add post</custom-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();

      if (this.post.title && this.post.body) {
        this.$emit("addPost", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 320px;
  margin: 0 auto 24px;
}
</style>
