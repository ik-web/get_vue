<template>
  <div class="container">
    <div class="pagePosts">
      <h1 class="pagePosts__title">The page with some posts</h1>
      <div class="pagePosts__top">
        <div class="pagePosts__button">
          <custom-button @click="showModal">Add new post</custom-button>
        </div>

        <div class="pagePosts__searchField">
          <custom-input v-model="searchQuery" placeholder="Search a post..." />
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

      <!-- <div class="pagePosts__pagination">
        <custom-pagination
          :totalPages="totalPages"
          :page="page"
          @update="changePage"
        />
      </div> -->

      <div class="pagePosts__list">
        <TransitionGroup name="pagePosts__list" tag="div">
          <custom-loader v-if="isPostsLoading" />
          <post-list
            v-bind:posts="SortedAndSearchedPosts"
            @remove="removePost"
            v-else
          />
        </TransitionGroup>
      </div>

      <div ref="observer" class="observer"></div>
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
      isPostsLoading: true,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 8,
      totalPages: 0,
      sortOptions: [
        { name: "By title", value: "title" },
        { name: "By description", value: "body" },
      ],
    };
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    SortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
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
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );

        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );

        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert(error);
      }
    },
    // changePage(page) {
    //   this.page = page;
    // },
  },

  mounted() {
    this.fetchPosts();

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersect = (...args) => {
      if (args[0][0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
        console.log('posts is loaded');
      }
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(this.$refs.observer);
  },

  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
  padding: 0 15px 0;
  margin: 0 auto;
}

.pagePosts__title {
  margin: 16px;
  text-align: center;
}

.pagePosts__select,
.pagePosts__searchField,
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

.pagePosts__pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pagePosts__list {
  position: relative;
}

.pagePosts__list-enter-active,
.pagePosts__list-leave-active {
  transition: all 0.5s ease;
}
.pagePosts__list-enter-from,
.pagePosts__list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.observer {
  height: 40px;
  background: teal;
}
</style>
