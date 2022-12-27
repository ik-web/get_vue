<template>
  <div class="container">
    <nav-bar />
    <router-view />
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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: white;
  transition: color .15s linear;
}

a:hover {
  color: cyan;
}

::-webkit-scrollbar {
  width: 0;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 20px;
}

html {
  font-family: sans-serif;
}

.container {
  max-width: 832px;
  width: 100%;
  padding: 52px 16px 0;
  margin: 0 auto;
}
</style>
