import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomeView from '../views/HomeView.vue'
import { onAuthStateChanged } from 'firebase/auth'



const META_URLS = [
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/product-details/:id',
    name: "product-details",
    component: () => import('../views/ProductDetails.vue'),
    meta: { requiresAuth: true },
  },
]


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
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
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
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/authentication/ResetPassword.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue'),
    },
    ...META_URLS,

    // =====================================================================================
    {
      path: '/:catchAll(.*)', // 404 page
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ],
})


// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next('/login')
    } else {
      next()
    }
  })
})

export default router
