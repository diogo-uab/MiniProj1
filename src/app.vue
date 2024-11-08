<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppFooter from './components/footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-full">
    <header
      class="sticky w-full top-0 z-10 border-b border-b-gray-300 bg-white"
    >
      <nav
        class="flex flex-1 flex-row flex-wrap gap-2 content-center justify-center items-center p-2"
      >
        <RouterLink to="/">Quem sou eu</RouterLink>
        <RouterLink to="/que-faco">O que faço</RouterLink>
        <RouterLink to="/hobbies">Hobbies</RouterLink>
      </nav>
    </header>

    <RouterView class="flex flex-1 flex-col" />

    <AppFooter />
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  @apply text-white bg-accent rounded-md;
}

nav a.router-link-exact-active:hover {
  @apply text-white;
}

nav a {
  @apply px-4 py-2 m-1 underline text-center align-middle;
}

nav a:hover {
  @apply text-gray-500 outline-[auto];
}
</style>
