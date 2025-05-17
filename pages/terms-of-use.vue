<!-- Terms of use page, detailing the site's usage rules for users. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.terms_of_use.title"),
  description: t("seo.terms_of_use.description"),
  ogTitle: t("seo.terms_of_use.title"),
  ogDescription: t("seo.terms_of_use.description"),
  ogImage: "https://nicolasbilic.com/images/app-alpes.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: t("seo.terms_of_use.title"),
  twitterDescription: t("seo.terms_of_use.description"),
  twitterImage: "https://nicolasbilic.com/images/app-alpes.jpg",
});

definePageMeta({
  layout: "legal-layout",
});
</script>

<template>
  <div>
    <div
      class="relative flex h-full w-full items-center justify-center py-12 pb-6 md:py-12"
    >
      <div class="p-5 text-center">
        <div class="p-5 text-center">
          <h1 class="text-[1.625rem] font-bold uppercase md:text-2xl">
            {{ $t("cu_title") }}
          </h1>
          <p class="text-sm opacity-75">{{ $t("legal_date") }}</p>
        </div>
      </div>
    </div>

    <div class="relative px-6">
      <div class="mx-auto max-w-xl">
        <section>
          <article class="pb-20">
            <p class="pb-2">{{ $t("cu_paragraph_1") }}</p>
            <p class="pb-2">{{ $t("cu_paragraph_2") }}</p>

            <h2
              class="mt-[30px] mb-[15px] text-[20px] md:mt-[40px] md:mb-[20px] md:text-[1.5rem]"
            >
              {{ $t("cu_h2") }}
            </h2>
            <p class="pb-2">{{ $t("cu_paragraph_3") }}</p>
            <p class="pb-2">{{ $t("cu_paragraph_4") }}</p>
            <p class="pb-2">
              {{ $t("cu_paragraph_5") }}
              (<a href="mailto:nicolasbilic.dev@nicolasbilic.com"
                >nicolasbilic.dev@nicolasbilic.com</a
              >).
              {{ $t("cu_paragraph_6") }}
            </p>

            <!-- <h2
              class="mt-[30px] mb-[15px] text-[20px] md:mt-[40px] md:mb-[20px] md:text-[1.5rem]"
            >
              {{ $t("cu_h2_1") }}
            </h2>
            <ul class="list-disc pl-10">
              <li>{{ $t("cu_paragraph_7") }}</li>
              <li>{{ $t("cu_paragraph_8") }}</li>
              <li>{{ $t("cu_paragraph_9") }}</li>
            </ul> -->

            <h2
              class="mt-[30px] mb-[15px] text-[20px] md:mt-[40px] md:mb-[20px] md:text-[1.5rem]"
            >
              {{ $t("cu_h2_2") }}
            </h2>
            <p class="pb-2">
              {{ $t("cu_paragraph_10") }}
              (<a href="mailto:nicolasbilic.dev@nicolasbilic.com"
                >nicolasbilic.dev@nicolasbilic.com</a
              >).
            </p>
            <br />
            <p class="pb-2">{{ $t("cu_paragraph_11") }}</p>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
