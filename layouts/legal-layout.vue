<script lang="ts" setup>
const head = useLocaleHead();

onMounted(() => {
  useGsap.from("#sidebarLegalLG", {
    y: 100,
    opacity: 0,
    delay: 1,
  });
  useGsap.from("#sidebarLegalSM", {
    x: -100,
    opacity: 0,
    delay: 1,
  });
});
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
            <UPageAside
              :ui="{ root: 'hidden lg:block lg:max-h-screen lg:top-0' }"
            >
              <!-- barre latérale ordinateur -->
              <Sidebar id="sidebarLegalLG" class="pt-24" />
            </UPageAside>
          </template>

          <!-- barre horizontale mobile/tablet -->
          <UPageAside :ui="{ root: 'block lg:hidden' }">
            <Sidebar id="sidebarLegalSM" />
          </UPageAside>
          <slot />
        </UPage>
      </UContainer>
    </Body>
  </Html>
</template>
