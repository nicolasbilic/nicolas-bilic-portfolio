<!-- Legal notice page, containing the site's legal information. -->

<script setup lang="ts">
const seoByLocale = {
  fr: {
    title: "Mentions légales - Nicolas Bilic",
    description: "Découvrez les mentions légales.",
  },
  en: {
    title: "Legal notice • Nicolas Bilic",
    description: "Learn more about our legal notice",
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

definePageMeta({
  layout: "legal-layout",
});
</script>

<template>
  <section>
    <div
      class="relative flex h-full w-full items-center justify-center pb-6 md:pb-12"
    >
      <div class="p-5 text-center">
        <div class="p-5 text-center">
          <h1 class="text-[1.625rem] font-bold md:text-[50px]">
            {{ $t("legal_h1") }}
          </h1>
          <p class="pt-3 text-sm opacity-75">{{ $t("legal_date") }}</p>
        </div>
      </div>
    </div>

    <div class="relative px-6">
      <div class="mx-auto max-w-2xl">
        <section>
          <article class="pb-20">
            <p class="pb-2">
              {{ $t("legal_paragraph_1") }}
            </p>
            <p class="pb-2">
              {{ $t("legal_paragraph_2") }}
            </p>
            <p class="pb-2">
              {{ $t("legal_paragraph_2_1") }}
            </p>
            <p class="pb-2">
              {{ $t("legal_paragraph_2_2") }}
            </p>
            <p class="pb-2">
              {{ $t("legal_paragraph_2_3") }}
            </p>

            <h2 class="mt-8 mb-4 text-xl font-semibold">
              {{ $t("article_1") }}
            </h2>

            <p class="pb-2">
              {{ $t("legal_paragraph_3") }}
              <span
                ><a href="mailto:agbilic@gmail.com"
                  >nicolasbilic.dev@nicolasbilic.com</a
                >.</span
              >
            </p>

            <p class="pb-2">
              {{ $t("legal_paragraph_3_1") }}
              <span
                ><a href="mailto:agbilic@gmail.com"
                  >nicolasbilic.dev@nicolasbilic.com</a
                >.</span
              >
            </p>

            <h2 class="mt-8 mb-4 text-xl font-semibold">
              {{ $t("article_2") }}
            </h2>
            <p class="pb-2">
              {{ $t("legal_paragraph_4") }}
            </p>

            <h2 class="mt-8 mb-4 text-xl font-semibold">
              {{ $t("article_mediation") }}
            </h2>

            <p class="pb-2">{{ $t("legal_paragraph_mediation") }}</p>

            <h5 class="mt-4 mb-4">
              Société Médiation Professionnelle - Alteritae
            </h5>
            <ul class="mb-4 list-disc ps-8">
              <li>{{ $t("legal_paragraph_mediation°2") }}</li>
              <li>{{ $t("legal_paragraph_mediation°3") }}</li>
            </ul>
            <p>{{ $t("legal_paragraph_mediation°4") }}</p>

            <h2 class="mt-8 mb-4 text-xl font-semibold">
              {{ $t("article_intellectual") }}
            </h2>
            <p class="pb-2">{{ $t("legal_paragraph_5") }}</p>

            <!-- <h2 class="mt-8 mb-4 text-xl font-semibold">
              {{ $t("attributions") }}
            </h2>
            <ul>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/air-conditioning"
                  title="air conditioning icons"
                  target="_blank"
                  >Air conditioning icons created by Iconiic - Flaticon</a
                >
              </li>
              <li>
                <a
                  href="https://www.flaticon.com/free-icons/panorama"
                  title="panorama icons"
                  target="_blank"
                  >Panorama icons created by Freepik - Flaticon</a
                >
              </li>
            </ul> -->
          </article>
        </section>
      </div>
    </div>
  </section>
</template>
