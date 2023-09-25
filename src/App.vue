<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useDark, useToggle } from "@vueuse/core"
const isDark = useDark({
  selector: "body",
  attribute: "theme", 
  valueDark: "custom-dark", 
  valueLight: "custom-light", 
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="container">
    <button @click="toggleDark()" class="border-0">
      <span v-if="isDark">☀️</span>
      <span v-else>🌜</span>
    </button>
    <Navbar></Navbar>
  </div>
  <RouterView class="mt-4" />
</template>

