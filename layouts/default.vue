<!-- This is the default layout applied to all pages unless another layout is specified -->

<script setup lang="ts">
// generates <html>, <meta> and <link> tags for SEO and localization
const head = useLocaleHead();

onMounted(() => {
  useGsap.from("#sidebarHomeLG", {
    y: 100,
    // autoAlpha : opacity + visibility
    autoAlpha: 0,
    delay: 0.5,
    onStart: () => {
      const el = document.getElementById("sidebarHomeLG");
      if (el) el.style.visibility = "visible";
    },
  });
  useGsap.from("#sidebarHome", {
    x: -100,
    autoAlpha: 0,
    delay: 0.5,
    onStart: () => {
      const el = document.getElementById("sidebarHome");
      if (el) el.style.visibility = "visible";
    },
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
    <Body class="bg-abstract min-h-screen bg-cover bg-center bg-no-repeat">
      <UContainer>
        <UPage>
          <template #left>
            <ContainerCenter class="hidden lg:flex">
              <UPageAside
                :ui="{ root: 'hidden lg:block lg:max-h-screen lg:top-0' }"
              >
                <!-- barre latérale ordinateur -->
                <Sidebar id="sidebarHomeLG" class="invisible" />
              </UPageAside>
            </ContainerCenter>
          </template>

          <slot />

          <!-- barre horizontale mobile/tablet -->
          <UPageAside :ui="{ root: 'block lg:hidden' }">
            <Sidebar id="sidebarHome" class="invisible" />
          </UPageAside>
        </UPage>
      </UContainer>
    </Body>
  </Html>
</template>
