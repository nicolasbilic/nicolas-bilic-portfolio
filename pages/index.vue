<!-- Homepage, presenting key information and an introduction to the podcast. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
  // description: t("seo.home.description"),
  // ogTitle: t("seo.home.title"),
  // ogDescription: t("seo.home.description"),
  // ogImage: "https://mon-site.vercel.app/charles-robin.webp",
  // twitterCard: "summary_large_image",
  // twitterTitle: t("seo.home.title"),
  // twitterDescription: t("seo.home.description"),
  // twitterImage: "https://mon-site.vercel.app/charles-robin.webp",
});
import frFlag from "assets/icons/flag-france.svg";
import ukFlag from "assets/icons/flag-uk.svg";

const { locales, locale, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const getFlag = (code: string) => {
  switch (code) {
    case "fr":
      return frFlag;
    case "en":
      return ukFlag;
    default:
      return ukFlag;
  }
};
</script>

<template>
  <div>
    <UContainer>
      <UColorModeSwitch color="info" />

      <!-- <ULocaleSelect v-model="locale" :locales="Object.values(locales)" /> -->
      <a
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="setLocale(locale.code)"
        href="#"
        :aria-label="
          t('button.changeLanguage', {
            langName: t(`language.${locale.code}`),
          })
        "
        class="my-1.5 flex px-3.5 outline-2 outline-red-500"
      >
        <img
          :src="getFlag(locale.code)"
          alt=""
          width="25"
          height="auto"
          class="flex items-center justify-center"
        />
      </a>

      <p>{{ t("seo.home.title") }}</p>
    </UContainer>
  </div>
</template>
