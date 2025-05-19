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
  useGsap.from("#projectsLG", {
    y: -100,
    autoAlpha: 0,
    delay: 0.5,
    onStart: () => {
      const el = document.getElementById("projectsLG");
      if (el) el.style.visibility = "visible";
    },
  });
  useGsap.from("#projects", {
    y: -100,
    autoAlpha: 0,
    delay: 0.5,
    onStart: () => {
      const el = document.getElementById("projects");
      if (el) el.style.visibility = "visible";
    },
  });
});
</script>

<template>
  <div>
    <!-- desktop -->
    <ContainerCenter class="invisible hidden lg:flex" id="projectsLG">
      <Projects />
    </ContainerCenter>

    <!-- mobile -->
    <!--  si tu fais ça dans le template parent : <Projects id="projects" />-->
    <!-- alors l’id="projects" est appliqué directement sur le composant Vue, pas sur le DOM rendu. -->
    <!-- et GSAP ne voit pas les composants Vue — il voit le DOM HTML réel, donc il ne trouve pas #projects. -->
    <!-- ci-dessous, GSAP trouve immédiatement cette div avec l’ID projects dans le DOM HTML, donc il peut l’animer. -->
    <div id="projects" class="invisible">
      <Projects class="flex lg:hidden" />
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { onMounted } from "vue";
import { animateProjectElement } from "@/utils/gsapAnimations"; // adapte le chemin si besoin

onMounted(() => {
  animateProjectElement("#projectsLG");
  animateProjectElement("#projects");
});
</script> -->
<!-- gsapAnimation.ts : import { gsap } from "gsap";

export function animateProjectElement(selector: string, delay = 0.5) {
  gsap.from(selector, {
    y: -100,
    autoAlpha: 0,
    delay,
    onStart: () => {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (el) el.style.visibility = "visible";
    },
  });
} -->
