<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "HTML", body: "About HTML" },
        { id: 2, title: "CSS", body: "About CSS" },
        { id: 3, title: "JavaScript", body: "About JavaScript" },
        { id: 4, title: "VueJS", body: "About VueJS" },
      ],
      title: "",
      body: "",
    };
  },

  methods: {
    addPost() {
      this.posts.push({
        id: Date.now(),
        title: this.title,
        body: this.body,
      });
      this.title = "";
      this.body = "";
    },

    inputTitle(e) {
      this.title = e.target.value;
    },

    inputBody(e) {
      this.body = e.target.value;
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">The page with some posts</h1>
    <h2 class="title">Add post</h2>

    <form class="form" @submit.prevent>
      <input
        type="text"
        placeholder="Post title"
        class="form__input"
        v-bind:value="title"
        @input="inputTitle"
      />

      <input
        type="text"
        placeholder="Post description"
        class="form__input"
        v-bind:value="body"
        @input="inputBody"
      />

      <button class="form__button" @click="addPost">Add post</button>
    </form>

    <div class="posts">
      <h2 class="blockTitle">Posts</h2>
      <div class="post" v-for="post in posts">
        <div class="post__title"><strong>Title:</strong> {{ post.title }}</div>

        <div class="post__body"><strong>body:</strong> {{ post.body }}</div>
      </div>
    </div>
  </div>
</template>

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

.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post {
  width: 100%;
  border: 4px double teal;
  padding: 16px;
}

.post__title {
  margin-bottom: 12px;
}

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
  padding: 8px;
  border: 1px solid teal;
}

.form__button {
  width: 100%;
  padding: 8px;
  border: 1px solid teal;
  color: white;
  background: teal;
  cursor: pointer;
  transition: all 0.15s ease-in;
}

.form__button:hover,
.form__button:focus {
  color: black;
  background: cyan;
}
</style>
