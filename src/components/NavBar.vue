<template>
  <div class="navbar">
    <div class="navbar__inner">
      <h2 class="navbar__title" @click="$router.push('/')">
        Get Vue 3
      </h2>

      <nav class="navbar__buttons">
        <custom-button @click="$router.push('/about')">About</custom-button>
        <custom-button @click="$router.push('/users')">Users</custom-button>
        <custom-button @click="$router.push('/posts')">Posts</custom-button>
      </nav>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;

  background: lightgrey;
  box-shadow: 1px 1px 8px gray;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 830px;
  width: 100%;
  padding: 12px 16px;
  margin: 0 auto;
}

.navbar__title {
  color: teal;
  cursor: pointer;
}

.navbar__buttons {
  display: flex;
  gap: 32px;
}
</style>
