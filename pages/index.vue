<!-- Homepage, presenting key information and an introduction to the podcast. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
  description: t("seo.home.description"),
  ogTitle: t("seo.home.title"),
  ogDescription: t("seo.home.description"),
  ogImage: "https://www.nicolasbilic.com/images/app-alpes.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: t("seo.home.title"),
  twitterDescription: t("seo.home.description"),
  twitterImage: "https://www.nicolasbilic.com/images/app-alpes.jpg",
});

onMounted(() => {
  slideDown("#projectsLG");
  slideDown("#projects");
});
</script>

<template>
  <div>
    <!-- desktop -->
    <ContainerCenter id="projectsLG" class="invisible hidden lg:flex">
      <Projects />
    </ContainerCenter>

    <!-- mobile -->
    <div id="projects" class="invisible">
      <Projects class="flex lg:hidden" />
    </div>
  </div>
</template>
