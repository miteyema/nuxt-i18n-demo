export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    // sitemap should always come last
    '@nuxtjs/sitemap',
  ],

  /*
   ** Nuxt.js dev modules
   */
  buildModules: ['@nuxtjs/eslint-module'],

  /*
   ** i18n config
   */
  i18n: {
    baseUrl: 'https://nuxt-i18n-demo.netlify.com',
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-AU',
        name: 'English',
      },
      {
        code: 'nl',
        iso: 'nl-BE',
        name: 'Nederlands',
      },
      {
        code: 'fr',
        iso: 'fr-BE',
        name: 'français',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        nl: require('./locales/nl.json'),
        fr: require('./locales/fr.json'),
      },
      dateTimeFormats: {
        en: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
        nl: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
        fr: {
          long: { year: 'numeric', month: 'long', day: 'numeric' },
        },
      },
    },
    // Netlify will do the language detection
    detectBrowserLanguage: false,
  },

  /*
   ** Sitemap config
   */
  sitemap: {
    hostname: 'https://nuxt-i18n-demo.netlify.com',
    i18n: 'en',
  },

  /*
   ** Build configuration
   */
  build: {},

  /*
   ** Router config
   */
  router: {
    trailingSlash: true,
  },

  /*
   ** Generate pages for static deploy
   */
  generate: {
    // See https://nuxtjs.org/faq/netlify-deployment/
    fallback: true,
    // the following would be an API call
    routes: ['/dynamic/1', '/dynamic/2', '/dynamic/3'],
  },
}
