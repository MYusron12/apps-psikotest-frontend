import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
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
      path: '/disctest',
      name: 'disctest',
      component: () => import('../views/psikotest/Disc.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/usermenu',
      name: 'usermenu',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/usersubmenu',
      name: 'usersubmenu',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/userrole',
      name: 'userrole',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/useraccessmenu',
      name: 'useraccessmenu',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/wartegtest',
      name: 'wartegtest',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/tiutest',
      name: 'tiutest',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/aboutapps',
      name: 'aboutapps',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/log',
      name: 'log',
      component: HomeView,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('token') 
      && from.name != 'login'
      && to.name != 'login'){
      next('/login')
  }
  const auth_store = useAuthStore()
  if(to.meta.requiresAuth && to.name != 'login' && !auth_store.is_login)
   next({ path: '/login' })
  else if(to.name == 'login' && auth_store.is_login) next({path: '/'})
  else next()
})

export default router
