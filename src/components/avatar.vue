<script setup lang="ts">
const { size = 100 } = defineProps<{ size?: number }>();
</script>

<template>
  <img
    class="rounded-full"
    src="@/assets/personal-avatar.png"
    alt="Personal avatar image"
    :width="size"
    :height="size"
  />
</template>
