<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Add post</h2>

    <input
      type="text"
      placeholder="Post title"
      class="form__input"
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
    />

    <input
      type="text"
      placeholder="Post description"
      class="form__input"
      v-model="post.body"
    />

    <custom-button @click="addPost">Add post</custom-button>
  </form>
</template>

<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {
    CustomButton,
  },
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

.form__input {
  width: 100%;
  padding: 12px;
  border: 1px solid teal;
}
</style>
