<template>
  <div class="container">
    <h1 class="title">The page with some posts</h1>

    <post-form @addPost="addPost"/>
    <post-list v-bind:posts="posts"/>

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
    };
  },

  methods: {
    addPost(post) {
      this.posts.push(post)
    }
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

.title {
  margin: 16px;
  text-align: center;
}

.blockTitle {
  text-align: center;
}
</style>
