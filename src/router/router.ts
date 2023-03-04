
import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from '../views/FirstPage.vue';

const routes = [
  { path: '/', component: FirstPage },
  // TODO:  Create NotFound view
  // { path: '/:pathMatch(.*)', component: NotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;