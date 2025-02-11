import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { toast } from 'vue3-toastify';
import { auth } from '@/firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/book-a-table',
      name: 'booking',
      component: () => import('../views/BookingView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authentication/LoginView.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/authentication/RegistrationView.vue'),
    },
  ],
})



// Navigation guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser

  if (requiresAuth && !isAuthenticated) {
    toast.error('You need to be logged in to access this page')
    next('/login')
  } else {
    next()
  }
})


export default router
