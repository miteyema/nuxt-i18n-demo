module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
  settings: {
    // See https://kazupon.github.io/eslint-plugin-vue-i18n/started.html#usage
    'vue-i18n': {
      localeDir: './locales/*.json', // extention is glob formatting!
    },
  },
}
