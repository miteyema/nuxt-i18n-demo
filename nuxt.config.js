export default {
  mode: 'universal',
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
  modules: ['@nuxtjs/eslint-module', 'nuxt-i18n'],
  /*
   ** i18n config
   */
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-AU',
        name: 'English'
      },
      {
        code: 'nl',
        iso: 'nl-BE',
        name: 'Nederlands'
      },
      {
        code: 'fr',
        iso: 'fr-BE',
        name: 'français'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        nl: require('./locales/nl.json'),
        fr: require('./locales/fr.json')
      },
      dateTimeFormats: {
        en: {
          long: { year: 'numeric', month: 'long', day: 'numeric' }
        },
        nl: {
          long: { year: 'numeric', month: 'long', day: 'numeric' }
        },
        fr: {
          long: { year: 'numeric', month: 'long', day: 'numeric' }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
