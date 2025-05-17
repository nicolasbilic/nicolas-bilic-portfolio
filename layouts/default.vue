<!-- This is the default layout applied to all pages unless another layout is specified -->

<script setup lang="ts">
import ContainerCenter from "~/components/ContainerCenter.vue";

// generates <html>, <meta> and <link> tags for SEO and localization
const head = useLocaleHead();

const localePath = useLocalePath();
const route = useRoute();
const isHome = computed(() => route.path === localePath("index"));
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.hid">
        <Link
          :id="link.hid"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta
          :id="meta.hid"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body>
      <UContainer>
        <UPage>
          <template #left>
            <ContainerCenter class="hidden lg:flex">
              <!-- <ContainerCenter :class="['hidden lg:flex', { 'pt-24': !isHome }]"> -->
              <UPageAside
                :ui="{ root: 'hidden lg:block lg:max-h-screen lg:top-0' }"
              >
                <Sidebar />
              </UPageAside>
            </ContainerCenter>
          </template>
          <slot />
          <UPageAside :ui="{ root: 'block lg:hidden' }">
            <Sidebar />
          </UPageAside>
        </UPage>
      </UContainer>
    </Body>
  </Html>
</template>
