<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
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
</template>
