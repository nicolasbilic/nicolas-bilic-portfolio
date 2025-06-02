<!-- Homepage, presenting key information and an introduction to the podcast. -->
<!-- test commit -->
<script setup lang="ts">
const seoByLocale = {
  fr: {
    title:
      "Nicolas Bilic Site Officiel - Sites internet, Professionnel, Design",
    description:
      "Développeur web freelance, création de sites modernes et performants.",
  },
  en: {
    title: "Nicolas Bilic Official Website - Professional Websites, Design",
    description:
      "Freelance web developer, building professional and fast websites.",
  },
};

const route = useRoute();
const localeCode = route.path.startsWith("/en") ? "en" : "fr";
const seo = seoByLocale[localeCode];

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogImage: "https://www.nicolasbilic.com/images/app-alpes.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: seo.title,
  twitterDescription: seo.description,
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
