<template>
  <div class="container">
    <div class="pagePosts">
      <h1 class="pagePosts__title">The page with some posts</h1>
      <div class="pagePosts__top">
        <div class="pagePosts__button">
          <custom-button @click="showModal">Add new post</custom-button>
        </div>

        <div class="pagePosts__select">
          <custom-select
            v-model="selectedSort"
            defaultOptionName="Select a sort method"
            :options="sortOptions"
          />
        </div>
      </div>

      <custom-modal v-model:show="isModalVisible">
        <post-form @create="createPost" />
      </custom-modal>

      <div class="pagePosts__list">
        <custom-loader v-if="isPostsLoading" />
        <post-list v-bind:posts="sortedPosts" @remove="removePost" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      isModalVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { name: "By title", value: "title" },
        { name: "By description", value: "body" },
      ],
    };
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((a,b)=> a[newValue]?.localeCompare(b[newValue]))
  //   }
  // },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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

.pagePosts__select,
.pagePosts__button {
  width: 200px;
}

.pagePosts__top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin-bottom: 20px;
}
</style>
