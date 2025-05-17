<!-- Homepage, presenting key information and an introduction to the podcast. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
});
</script>

<template>
  <ContainerCenter>
    <Projects />
  </ContainerCenter>
</template>
<!-- gsap 1 animation -->
