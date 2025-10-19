import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - VueWork',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projects - VueWork',
      },
    },
    {
      path: '/projects/:id',
      name: 'project-board',
      component: () => import('../views/BoardView.vue'),
      meta: {
        title: 'Board - VueWork',
      },
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue'),
      meta: {
        title: 'Calendar - VueWork',
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        title: 'Admin - VueWork',
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: '404 - VueWork',
      },
    },
  ],
})

// Update page title on navigation
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'VueWork'
  next()
})

export default router
