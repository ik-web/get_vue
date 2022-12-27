<template>
  <div class="homePage">
    <h1 class="homePage__title">Welcome to Vue 3</h1>

    <p class="homePage__subtitle">
      Practical work, familiarization with Vue framework
    </p>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  height: 100vh;
}

.homePage__title {
  font-size: 48px;
  color: teal;
}
</style>
