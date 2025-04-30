import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { onAuthStateChanged } from 'firebase/auth'



const META_URLS = [
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/product-details/:id',
    name: "product-details",
    component: () => import('../components/products/ProductDetails.vue'),
    // meta: { requiresAuth: true },
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
      component: AboutView,
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
  scrollBehavior(to, from, savedPosition) {
    // If the route has a hash, scroll to the element with that id
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // offset for fixed header if you have one
      }
    }
    // If there's a saved position (like when using browser back/forward buttons)
    if (savedPosition) {
      return savedPosition
    }
    // For all other cases, scroll to top smoothly
    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  },
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
