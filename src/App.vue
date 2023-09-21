<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
  <RouterView class="mt-4" />
</template>

