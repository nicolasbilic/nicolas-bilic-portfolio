// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxtjs/i18n',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/sitemap',
    '@nuxthub/core',
  ],
  site: {
    url: 'https://www.nicolasbilic.com/',
  },
  css: ['~/assets/css/main.css'],


  ssr: true,
  // nitro: {
  //   prerender: {
  //     routes: [
  //       '/', '/legal', '/privacy-policy', '/terms-of-use',
  //       '/en', '/en/legal', '/en/privacy-policy', '/en/terms-of-use'
  //     ]
  //   }
  // },

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
        // { rel: 'preload', as: 'image', href: '/images/app-alpes.webp' },
        // { rel: 'preload', as: 'image', href: '/images/app-chez-agnes.webp' },
        // { rel: 'preload', as: 'image', href: '/images/app-escale-provencale.webp' },
        // { rel: 'preload', as: 'image', href: '/images/app-escale-flayoscaise.webp' },
        // { rel: 'preload', as: 'image', href: '/images/app-gaia.webp' },
        // { rel: 'preload', as: 'image', href: '/images/app-ludus-studios.webp' },
      ]
    },
  },

  i18n: {
    locales: [
      { code: "fr", language: "fr-FR", name: "Français", file: "fr.json" },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    lazy: true,
    defaultLocale: "fr",
    // fallback base URL to use as a prefix for alternate URLs in hreflang tags (url de production)
    baseUrl: "https://www.nicolasbilic.com",
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