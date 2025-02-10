<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue';
</script>

<template>
<div>
  <header>
    <NavBar />
  </header>
  <main class="main-portfolio">
    <RouterView />
  </main>
  <footer>
    <AppFooter />
  </footer>
</div>
</template>
