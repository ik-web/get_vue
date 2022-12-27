<template>
  <div class="usersPage">
    <h1 class="usersPage__title">The page with some users</h1>

    <div class="usersPage__list" v-for="user in users">
      <div>{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      limit: 3,
      page: 1,
      totalPages: 0,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        console.log(response.data);
        this.users = response.data;
      } catch (error) {
        alert(error);
      } finally {
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.usersPage__title {
  margin: 40px 0;
  text-align: center;
}
</style>
