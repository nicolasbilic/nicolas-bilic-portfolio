<script setup lang="ts">
import frFlag from "assets/icons/flag-france.svg";
import ukFlag from "assets/icons/flag-uk.svg";

const { t } = useI18n();
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
    class="flex lg:pt-1"
  >
    <img
      :src="getFlag(locale.code)"
      width="22"
      height="28"
      sizes="22 sm:28 md:32 xl:36"
      aria-hidden="true"
      class="flex w-7 items-center justify-center md:w-8 lg:w-8 xl:w-9"
    />
  </a>
</template>
