<script setup lang="ts">
const projects = [
  {
    img: "/images/app-chez-agnes.webp",
    to: "",
    name: "Chez Agnès",
    imgClass: "brightness-50",
    comingSoon: true,
  },
  {
    img: "/images/app-escale-provencale.webp",
    to: "https://www.lescaleprovencale.com/",
    name: "L\'escale Provencale",
  },
  {
    img: "/images/app-gaia.webp",
    to: "https://gaia-graphic-designer.vercel.app/",
    name: "Gaia",
  },
];

const moreProjects = [
  {
    img: "/images/app-ludus-studios.webp",
    to: "https://alpes-eta.vercel.app/",
    name: "Alpes",
  },
  {
    img: "/images/app-escale-flayoscaise.webp",
    to: "https://www.escaleflayoscaise.com/",
    name: "L\'escale Flayoscaise",
  },

  {
    img: "/images/app-alpes.webp",
    to: "https://alpes-eta.vercel.app/",
    name: "Alpes",
  },
];
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <UPageMarquee
      pause-on-hover
      :overlay="true"
      :ui="{
        root: '[--gap:--spacing(4)] [--duration:40s]',
        content: 'w-auto py-1 flex-1',
      }"
    >
      <UPageCard
        v-for="(project, index) in projects"
        :key="index"
        :to="project.to"
        target="_blank"
        spotlight
        spotlight-color="info"
        :ui="{ container: 'p-0 sm:p-0' }"
        class="relative w-[450px] shrink-0 overflow-hidden"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="450"
          height="250"
          fit="cover"
          class="rounded-lg"
          :class="project.imgClass"
        />
        <div
          v-if="project.comingSoon"
          class="text-default absolute inset-0 flex items-center justify-center text-2xl font-semibold"
        >
          <UButton icon="i-hugeicons-coming-soon-02" size="lg" color="info">{{
            $t("projects.comingSoon")
          }}</UButton>
        </div>
      </UPageCard>
    </UPageMarquee>

    <UPageMarquee
      pause-on-hover
      reverse
      :overlay="true"
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
        spotlight
        spotlight-color="info"
        :ui="{ container: 'p-0 sm:p-0' }"
        class="w-[500px] shrink-0"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="500"
          height="280"
          fit="cover"
          class="rounded-lg"
        />
      </UPageCard>
    </UPageMarquee>
  </div>
</template>
