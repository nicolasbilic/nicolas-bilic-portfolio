// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui-pro', '@nuxtjs/i18n', '@hypernym/nuxt-gsap'],
  css: ['~/assets/css/main.css'],

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    }
  },

  app: {
    head: {
      title: 'Nicolas Bilic - Portfolio',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'preload', as: 'image', href: '' },
        // { rel: 'preload', as: 'image', href: '' },
      ]
    },
  },

  i18n: {
    locales: [
      { code: "fr", language: "fr-FR", name: "Français", file: "fr.json" },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json', isCatchallLocale: true },

    ],
    lazy: true,
    defaultLocale: "fr",
    // fallback base URL to use as a prefix for alternate URLs in hreflang tags (url de production)
    baseUrl: "https://lp.vercel.app",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    bundle: {
      // disabling this feature as it causes issues and will be deprecated in v10.
      optimizeTranslationDirective: false,
    },
  },

  experimental: {
    scanPageMeta: true,
  },
})