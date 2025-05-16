<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Contact",
      icon: "i-material-symbols-mail-rounded",
    },
  ],
]);
</script>

<template>
  <UNavigationMenu collapsed orientation="vertical" :items="items" />
  <div class="space-y-4">
    <UColorModeSwitch color="info" />
    <LangButton />
    <div class="relative">
      <NuxtImg
        src="/images/cartoon.jpg"
        width="150"
        height="150"
        class="relative z-20 rounded-full opacity-100 transition-all duration-500 ease-in-out hover:opacity-0"
      />
      <NuxtImg
        src="/images/avatar-nicolas-bilic.jpg"
        width="150"
        height="150"
        fit="cover"
        class="absolute inset-0 rounded-full"
      />
    </div>
    <h1 class="text-3xl font-bold">Nicolas</h1>
  </div>
</template>
