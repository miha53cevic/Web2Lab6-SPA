import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import { useAuthStore } from '@/stores/authStore';

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
      component: () => import('../views/CreatePollView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/poll/:id',
        name: 'poll',
        component: () => import('../views/PollView.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue')
    },
  ]
});

router.beforeEach(async (to) => {
    const privatePages = ['/create-poll'];
    const state = useAuthStore();
    if (!state.isAuthenticated && privatePages.includes(to.path)) {
        state.setLandingUrl(to.fullPath);
        return '/login';
    }
});

export default router;
