<script setup lang="ts">
const projects = [
  {
    img: "/images/app-escale-provencale.webp",
    to: "https://www.lescaleprovencale.com/",
    name: "L\'escale Provencale",
    imgClass: "",
    comingSoon: false,
  },
  {
    img: "/images/app-alpes.webp",
    to: "https://alpes-eta.vercel.app/",
    name: "Alpes",
  },
  {
    img: "/images/app-gaia.webp",
    to: "https://gaia-graphic-designer.vercel.app/",
    name: "Gaia",
  },
];

const moreProjects = [
  {
    img: "/images/app-escale-flayoscaise.webp",
    to: "https://www.escaleflayoscaise.com/",
    name: "L\'escale Flayoscaise",
  },
  {
    img: "/images/app-ludus-studios.webp",
    to: "https://front-gaming-app.vercel.app/",
    name: "Alpes",
  },
  {
    img: "/images/app-chez-agnes.webp",
    to: "",
    name: "Chez Agnès",
    imgClass: "brightness-50",
    comingSoon: true,
  },
];
</script>

<template>
  <UPageCard
    spotlight
    spotlight-color="info"
    class="flex w-full flex-col gap-4"
    :ui="{ container: 'p-4 sm:p-10', root: 'ring-1' }"
  >
    <UPageMarquee
      pause-on-hover
      :overlay="true"
      :ui="{
        root: '[--gap:--spacing(4)] [--duration:40s]',
        content: 'w-auto py-1',
      }"
    >
      <UPageCard
        v-for="(project, index) in projects"
        :key="index"
        :to="project.to"
        target="_blank"
        :ui="{ container: 'p-0 sm:p-0', root: 'ring-3' }"
        class="relative w-[500px]"
        highlight
        highlight-color="info"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="500"
          height="280"
          :class="project.imgClass"
          class="rounded-lg"
        />
        <ButtonComingSoon v-if="project.comingSoon" />
      </UPageCard>
    </UPageMarquee>

    <UPageMarquee
      pause-on-hover
      :overlay="true"
      reverse
      :ui="{
        root: '[--gap:--spacing(4)] [--duration:40s]',
        content: 'w-auto py-1',
      }"
    >
      <UPageCard
        v-for="(project, index) in moreProjects"
        :key="index"
        :to="project.to"
        target="_blank"
        :ui="{ container: 'p-0 sm:p-0', root: 'ring-3' }"
        class="relative w-[500px]"
        highlight
        highlight-color="info"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="500"
          height="280"
          :class="project.imgClass"
          class="rounded-lg"
        />
        <ButtonComingSoon v-if="project.comingSoon" />
      </UPageCard>
    </UPageMarquee>
  </UPageCard>
</template>
