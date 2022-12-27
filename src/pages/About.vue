<template>
  <div class="aboutPage">
    <h1 class="aboutPage__title">
      About this project
    </h1>

    <p class="aboutPage__describe">
      Practical work to familiarize with the VUE framework. Get to grips with all the basic concepts of Vue 3. Here are the basic cases you'll find everywhere: CRUD, sorting, searching, pagination, dynamic pagination, mixins, directives, VueX, and composition API.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aboutPage__title {
  margin: 40px 0;
}

.aboutPage__describe {
  max-width: 800px;
  padding: 20px;

  font-size: 20px;
  line-height: 1.25;
  border: 4px double teal
}
</style>