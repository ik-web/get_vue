<template>
  <form class="form" @submit.prevent>
    <h2 class="form__title">Add post</h2>

    <custom-input
      type="text"
      placeholder="Post title"
      v-model.trim="post.title"
    />

    <custom-input
      type="text"
      placeholder="Post description"
      v-model.trim="post.body"
    />

    <custom-button @click="createPost">Add post</custom-button>
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
    createPost() {
      this.post.id = Date.now();

      if (this.post.title && this.post.body) {
        this.$emit("create", this.post);
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
  margin: 0 auto;
}

.form__title {
  margin: 0;
}
</style>
