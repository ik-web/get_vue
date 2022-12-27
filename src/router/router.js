import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Users from '@/pages/Users.vue';
import Posts from '@/pages/Posts.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  ,
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/posts',
    component: Posts
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;