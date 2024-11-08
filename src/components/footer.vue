<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Avatar from './avatar.vue';

const iconLinkItems: { icon: string; link: string }[] = [
  { icon: 'devicon:github', link: 'https://github.com' },
  { icon: 'devicon:linkedin', link: 'https://linkedin.com' },
  { icon: 'devicon:facebook', link: 'https://facebook.com' },
  { icon: 'devicon:twitter', link: 'https://twitter.com' },
  { icon: 'skill-icons:instagram', link: 'https://instagram.com' },
  { icon: 'mdi:google-plus', link: 'https://plus.google.com' },
];
</script>

<template>
  <footer
    class="flex flex-col items-center justify-center w-full bg-gray-100 border-t border-gray-200 min-h-24 p-4"
  >
    <Avatar class="self-center" />
    <p class="font-semibold text-lg mt-5 mb-3 text-center">Social Media</p>
    <ul class="flex flex-row flex-wrap justify-center gap-5 p-2">
      <li v-for="item in iconLinkItems" v-bind:key="item.link">
        <a :href="item.link">
          <Icon :icon="item.icon" class="text-3xl" />
        </a>
      </li>
    </ul>
    <p
      class="w-full border-t border-slate-300 mt-8 pt-4 pb-2 text-xs text-slate-500"
    >
      {{ new Date().getFullYear() }} &copy; Todos os direitos reservados
    </p>
  </footer>
</template>
