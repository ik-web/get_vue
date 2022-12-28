<template>
  <div>
    <h1 class="Post__title">Post with id {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .Post__title {
  margin: 40px 0;
  text-align: center;
}
</style>