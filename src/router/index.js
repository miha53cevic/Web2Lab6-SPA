import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreatePollView from '../views/CreatePollView.vue';
import ListView from '../views/ListView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import LoginView from '../views/LoginView.vue';
import PollView from '../views/PollView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-poll',
      name: 'create-poll',
      component: CreatePollView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/poll/:id',
        name: 'poll',
        component: PollView
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
});

export default router;
