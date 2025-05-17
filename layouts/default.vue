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
            <component :is="isHome ? ContainerCenter : 'div'">
              <UPageAside :ui="{ root: 'flex lg:block lg:max-h-screen' }">
                <Sidebar />
              </UPageAside>
            </component>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </Body>
  </Html>
</template>
