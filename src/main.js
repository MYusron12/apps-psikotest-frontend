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

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();
    }
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = import.meta.env.VITE_APP_APIHOST + 'api'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.common['Content-Type'] = 'application/json'
// app.config.globalProperties.$http = axios
app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
