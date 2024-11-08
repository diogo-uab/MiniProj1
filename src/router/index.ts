import { createRouter, createWebHistory } from 'vue-router';
import QuemSouEu from '../views/quem-sou-eu.vue';
import QueFaco from '../views/que-faco.vue';
import Hobbies from '../views/hobbies.vue';
import NotFound from '../views/not-found.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quem-sou-eu',
      component: QuemSouEu,
    },
    {
      path: '/que-faco',
      name: 'que-faco',
      component: QueFaco,
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: Hobbies,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router;
