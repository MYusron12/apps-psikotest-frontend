import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)
const pinia = createPinia()

useAuthStore(pinia)
app.use(pinia)
app.use(router)

// axios.defaults.baseURL = import.meta.env.VITE_APP_APIHOST+'api'
const axiosSetting = axios.create({
  baseURL: import.meta.env.VITE_APP_APIHOST+'api',
})

axiosSetting.defaults.headers.common['Content-Type'] = 'application/json'
axiosSetting.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    // } else if (!config.url.includes('api/login')){
    //   document.location="/login"
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosSetting.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();
    }
    return Promise.reject(error);
  }
);

app.config.globalProperties.$axios = axiosSetting

app.mount('#app')
