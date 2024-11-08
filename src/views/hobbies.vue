<script setup lang="ts">
import { Icon } from '@iconify/vue';

const hobbies: { label: string; icon: string }[] = [
  { label: 'Cinema', icon: 'maki:cinema' },
  { label: 'Motociclismo', icon: 'maki:racetrack' },
  { label: 'Videojogos', icon: 'maki:gaming' },
  { label: 'Viajar', icon: 'material-symbols:travel' },
  { label: 'Ler', icon: 'ep:reading' },
  { label: 'Self Hosting', icon: 'mdi:server' },
];
</script>

<template>
  <main class="max-w-screen-md p-6 self-center gap-5">
    <h1 class="text-3xl font-bold">Hobbies</h1>
    <p>
      Tenho vários interesses e atividades que gosto de realizar nos meus tempos
      livres. Estas atividades ajudam-me a relaxar, proporcionam entretenimento,
      e contribuem para a minha aprendizagem em diversos tópicos.
    </p>
    <p>Algumas destas ativadades incluem:</p>
    <ul class="flex flex-col gap-3 px-6 mt-4 self-center">
      <li
        v-for="item in hobbies"
        v-bind:key="item.label"
        class="flex flex-row items-center gap-4"
      >
        <Icon :icon="item.icon" class="text-2xl text-accent" />
        <span class="text-lg">{{ item.label }}</span>
      </li>
    </ul>
  </main>
</template>
