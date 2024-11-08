<script setup lang="ts">
import Avatar from '@/components/avatar.vue';
</script>

<template>
  <main class="max-w-screen-sm p-6 self-center gap-4">
    <h1 class="text-3xl font-bold">Quem sou eu?</h1>
    <Avatar :size="300" class="self-center my-4" />
    <p class="text-lg">
      Eu sou o <span class="text-xl font-medium">Fulano Sicrano</span>,
    </p>
    <p>
      Sou natural do Porto, Portugal, cidade onde resido, já tendo também vivido
      em Lisboa.
    </p>
    <p>
      Trabalho no desenvolvimento de software há mais de 6 anos, área pela qual
      tenho enorme interesse e paixão e me dedico também nos meus tempos livres.
      Quer seja a aprender e desenvolver coisas novas e interessantes, seja a
      gerir o meu "home server", ou até a automatizar tarefas e dispositvos cá
      em casa.
    </p>
  </main>
</template>
