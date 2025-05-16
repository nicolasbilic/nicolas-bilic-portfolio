<!-- Homepage, presenting key information and an introduction to the podcast. -->

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
});
</script>

<template>
  <ContainerCenter>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside :ui="{ root: 'flex lg:block' }">
            <Sidebar />
          </UPageAside>
        </template>
        <div class="relative">
          <!-- <Separator /> -->
          <Projects />
        </div>
      </UPage>
    </UContainer>
  </ContainerCenter>
</template>
