<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <UButton
    icon="i-mdi-linkedin"
    variant="ghost"
    class="text-info max-w-max"
    to="https://www.linkedin.com/in/nicolas-bilic/"
    target="_blank"
    :ui="{
      leadingIcon: 'size-7 sm:size-8 md:size-10 lg:size-10 xl:size-12',
      base: 'px-0 py-0 ',
    }"
    :aria-label="t('link.linkedin')"
  />
</template>
