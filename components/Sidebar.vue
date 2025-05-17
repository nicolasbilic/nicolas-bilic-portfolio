<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const { t } = useI18n();
const localePath = useLocalePath();

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: t("seo.legal.title"),
    to: localePath("legal"),
  },
  {
    label: t("seo.privacy-policy.title"),
    to: localePath("privacy-policy"),
  },
  {
    label: t("seo.terms-of-use.title"),
    to: localePath("terms-of-use"),
  },
]);
</script>

<template>
  <UPageCard spotlight spotlight-color="info">
    <UButtonGroup>
      <UDropdownMenu :items="items">
        <UButton
          size="md"
          color="info"
          variant="ghost"
          icon="i-hugeicons-legal-01"
        />
      </UDropdownMenu>
    </UButtonGroup>

    <!-- Lang Switcher -->
    <LangButton />

    <UButton
      icon="i-material-symbols-home-rounded"
      size="xl"
      variant="ghost"
      class="text-info max-w-max"
      :to="localePath('index')"
      :ui="{
        leadingIcon: 'size-12',
        base: 'px-0 py-0 ',
      }"
    />

    <!-- Contact -->
    <UButton
      icon="i-material-symbols-mail-rounded"
      size="xl"
      variant="ghost"
      class="text-info max-w-max"
      to="mailto:nicolasbilic.dev@nicolasbilic.com"
      :ui="{
        leadingIcon: 'size-12',
        base: 'px-0 py-0 ',
      }"
    />

    <!-- Profile -->
    <div class="relative">
      <NuxtImg
        src="/images/cartoon.jpg"
        width="140"
        height="140"
        class="relative z-20 rounded-full opacity-100 transition-opacity duration-75 hover:opacity-0"
      />
      <NuxtImg
        src="/images/avatar-nicolas-bilic.jpg"
        width="140"
        height="140"
        fit="cover"
        class="absolute inset-0 rounded-full"
      />
    </div>

    <h1 class="text-3xl font-bold">Nicolas</h1>
  </UPageCard>
</template>
