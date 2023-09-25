import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {requiresAuth: true }
    },
    {
      path: '/disc',
      name: 'disc',
      component: () => import('../views/disc/Index.vue'),
      meta: {requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('token') 
      && from.name != 'login'
      && to.name != 'login'){
    document.location="/login"
  }
  const auth_store = useAuthStore()
  if(to.meta.requiresAuth && to.name != 'login' && !auth_store.is_login)
   next({ path: '/login' })
  else if(to.name == 'login' && auth_store.is_login) next({path: '/'})
  else next()
})

export default router
