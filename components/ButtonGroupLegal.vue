<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const { t } = useI18n();
const localePath = useLocalePath();

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: t("link.legal"),
    to: localePath("legal"),
  },
  {
    label: t("link.privacy_policy"),
    to: localePath("privacy-policy"),
  },
  {
    label: t("link.terms_of_use"),
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
