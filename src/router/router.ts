
import { createRouter, createWebHistory } from 'vue-router';
import CharacterList from '../views/CharacterList.vue';

const routes = [
  { path: '/', component: CharacterList },
  // TODO:  Create NotFound view
  // { path: '/:pathMatch(.*)', component: NotFound}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;