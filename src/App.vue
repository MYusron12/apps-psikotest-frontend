<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from "@vueuse/core"
import {useAuthStore} from './stores/auth'
import axios from 'axios'
import {ref, onMounted} from 'vue'
const isDark = useDark({
  selector: "body",
  attribute: "theme", 
  valueDark: "custom-dark", 
  valueLight: "custom-light", 
})
const toggleDark = useToggle(isDark)
const auth = useAuthStore()
const url = import.meta.env.VITE_APP_APIHOST+'api'
const user_menu = ref([])
const user_sub_menu = ref([])
const subMenu = (menuId) => {
  return user_sub_menu.value.filter(submenu => submenu.menu_id === menuId)
}
onMounted(async() => {
  try {
    const ress = await axios.get(`${url}/user-menu`)
    user_menu.value = ress.data.user_menu
    user_sub_menu.value = ress.data.user_sub_menu
  } catch (error) {
    console.log(error);
  }
})
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg" v-if="auth.is_login">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item dropdown" 
              v-for="menu in user_menu" 
              :key="menu.id">
              <a class="nav-link dropdown-toggle"  
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                {{ menu.menu }}
              </a>
              <ul class="dropdown-menu">
                <li v-for="sub_menu in subMenu(menu.id)" 
                  :key="sub_menu.id">
                  <RouterLink class="dropdown-item" 
                    :to="sub_menu.url">{{ sub_menu.title }}
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" 
          id="navbarNav">
          <button @click="toggleDark()" class="bg-transparent border-0">
            <span v-if="isDark">☀️</span>
            <span v-else>🌜</span>
          </button>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <button class="btn dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                {{auth.user.name}}
              </button>
              <ul class="dropdown-menu">
                <RouterLink class="nav-link" to="/">Profile</RouterLink>
                <button class="nav-link" @click="auth.logout">Logout</button>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView class="mt-4" />
</template>

