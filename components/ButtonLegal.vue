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
</template>
