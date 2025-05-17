<!-- By default, Nuxt treats this file as the entrypoint and render its content for every route of the application -->

<script setup lang="ts">
// import all available languages from Nuxt UI Pro
import * as locales from "@nuxt/ui-pro/locale";

// get the active language and the function translation from useI18n
const { locale } = useI18n();
</script>

<template>
  <div>
    <UApp :locale="locales[locale]">
      <NuxtLayout>
        <NuxtRouteAnnouncer />
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
