<template>
  <div class="container">
    <div class="pagePosts">
      <h1 class="pagePosts__title">The page with some posts</h1>
      <div class="pagePosts__button">
        <custom-button @click="showModal">Add new post</custom-button>
      </div>

      <custom-modal v-model:show="isModalVisible">
        <post-form @create="createPost" />
      </custom-modal>

      <div class="pagePosts__list">
        <post-list v-bind:posts="posts" @remove="removePost" />
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "HTML", body: "About HTML" },
        { id: 2, title: "CSS", body: "About CSS" },
        { id: 3, title: "JavaScript", body: "About JavaScript" },
        { id: 4, title: "VueJS", body: "About VueJS" },
      ],
      isModalVisible: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isModalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.isModalVisible = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
}

.container {
  max-width: 830px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.pagePosts__title {
  margin: 16px;
  text-align: center;
}

.pagePosts__button {
  width: 300px;
  margin: 0 auto 20px;
}
</style>
