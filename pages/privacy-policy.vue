<!-- Privacy policy page, explaining how users' personal data is managed. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.privacy_policy.title"),
  description: t("seo.privacy_policy.description"),
  ogTitle: t("seo.privacy_policy.title"),
  ogDescription: t("seo.privacy_policy.description"),
  ogImage: "https://www.nicolasbilic.com/images/app-alpes.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: t("seo.privacy_policy.title"),
  twitterDescription: t("seo.privacy_policy.description"),
  twitterImage: "https://www.nicolasbilic.com/images/app-alpes.jpg",
});

definePageMeta({
  layout: "legal-layout",
});
</script>

<template>
  <div>
    <div
      class="relative flex h-full w-full items-center justify-center py-12 md:py-12"
    >
      <div class="p-5 text-center">
        <div class="p-5 text-center">
          <h1 class="text-[1.625rem] font-bold uppercase md:text-2xl">
            {{ $t("pp_title") }}
          </h1>
          <p class="text-sm opacity-75">
            {{ $t("legal_date") }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative px-6">
      <div class="mx-auto max-w-xl">
        <section>
          <article class="pb-20">
            <p class="pb-2">{{ $t("pp_paragraph_1") }}</p>
            <p class="pb-2">{{ $t("pp_paragraph_2") }}</p>
            <p class="pb-2">{{ $t("pp_paragraph_3") }}</p>

            <h2
              class="my-[30px] mb-[15px] text-[20px] md:my-[40px] md:mb-[20px] md:text-[1.5rem]"
            >
              {{ $t("pp_subtitle_1") }}
            </h2>
            <p class="pb-2">{{ $t("pp_paragraph_4") }}</p>
            <p class="pb-2">{{ $t("pp_paragraph_5") }}</p>

            <h3 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_article_1") }}
            </h3>
            <p class="pb-2">{{ $t("pp_paragraph_6") }}</p>
            <p class="pb-2">{{ $t("pp_list_1") }}</p>

            <h3 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_article_2") }}
            </h3>
            <p class="pb-2">{{ $t("pp_paragraph_7") }}</p>
            <ul class="list-disc pl-10">
              <li>{{ $t("pp_list_2") }}</li>
            </ul>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_1") }}
            </h5>
            <p class="pb-2">{{ $t("pp_paragraph_8") }}</p>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_2") }}
            </h5>
            <p class="pb-2">{{ $t("pp_paragraph_9") }}</p>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_3") }}
            </h5>
            <p class="pb-2">{{ $t("pp_paragraph_10") }}</p>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_4") }}
            </h5>
            <p class="pb-2">{{ $t("pp_paragraph_11") }}</p>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_5") }}
            </h5>
            <p class="pb-2">{{ $t("pp_paragraph_12") }}</p>

            <h3 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_article_3") }}
            </h3>
            <p class="pb-2">{{ $t("pp_paragraph_13") }}</p>
            <ul class="list-disc pl-10">
              <li>{{ $t("pp_list_3") }}</li>
              <li>{{ $t("pp_list_4") }}</li>
              <li>{{ $t("pp_list_5") }}</li>
            </ul>
            <br />
            <p class="pb-2">{{ $t("pp_paragraph_14") }}</p>
            <p class="pb-2">
              {{ $t("pp_paragraph_15") }}
              <a
                href="mailto:nicolasbilic.dev@nicolasbilic.com"
                class="text-blue-600 underline"
                >nicolasbilic.dev@nicolasbilic.com</a
              >.
            </p>

            <h3 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_article_4") }}
            </h3>
            <p class="pb-2">{{ $t("pp_paragraph_16") }}</p>
            <ul class="list-disc pl-10">
              <li>{{ $t("pp_list_6") }}</li>
            </ul>
            <br />
            <p class="pb-2">{{ $t("pp_paragraph_17") }}</p>

            <h5 class="my-[20px] mb-[10px] text-xl underline">
              {{ $t("pp_h5_6") }}
            </h5>
            <p class="pb-2">
              {{ $t("pp_paragraph_18") }}
              <a
                href="mailto:nicolasbilic.dev@nicolasbilic.com"
                class="text-blue-600 underline"
                >nicolasbilic.dev@nicolasbilic.com</a
              >.
            </p>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
