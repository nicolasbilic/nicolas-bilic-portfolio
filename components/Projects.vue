<script setup lang="ts">
type Project = {
  img: string;
  to: string;
  name: string;
  lazyImg?: "lazy" | "eager";
};

const projects: Project[] = [
  {
    img: "/images/app-escale-provencale.webp",
    to: "https://www.lescaleprovencale.com/",
    name: "L\'escale Provencale",
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

const moreProjects: Project[] = [
  // {
  //   img: "/images/app-ludus-studios.webp",
  //   to: "https://front-gaming-app.vercel.app/",
  //   name: "Alpes",
  // },
  {
    img: "/images/app-escale-flayoscaise.webp",
    to: "https://www.escaleflayoscaise.com/",
    name: "L\'escale Flayoscaise",
  },
  {
    img: "/images/app-chez-agnes.webp",
    to: "",
    name: "Chez Agnès",
    lazyImg: "lazy",
  },
];
</script>

<template>
  <UPageCard
    spotlight
    spotlight-color="info"
    class="mt-10 flex w-full flex-col gap-4 lg:mt-0"
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
        :ui="{ container: 'p-0 sm:p-0', root: 'ring-2' }"
        class="relative"
        highlight
        highlight-color="info"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="320"
          height="172"
          sizes="320 md:384 lg:500"
          :loading="project.lazyImg"
          class="rounded-lg md:w-[384px] lg:w-[500px]"
        />
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
        :ui="{ container: 'p-0 sm:p-0', root: 'ring-2' }"
        class="relative"
        highlight
        highlight-color="info"
      >
        <NuxtImg
          :src="project.img"
          :alt="project.name"
          width="320"
          height="172"
          sizes="320 md:384 lg:500"
          :loading="project.lazyImg"
          class="rounded-lg md:w-[384px] lg:w-[500px]"
        />
      </UPageCard>
    </UPageMarquee>
  </UPageCard>
</template>
