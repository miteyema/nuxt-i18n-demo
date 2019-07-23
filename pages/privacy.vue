<template>
  <div>
    <h1>Privacy</h1>
    <p>
      This is the privacy policy. As I don't have time to translate, this will
      just stay in English.
    </p>
    <p>
      <nuxt-link :to="localePath('index')">
        Go back
      </nuxt-link>
    </p>
  </div>
</template>

<script>
/* eslint-disable vue-i18n/no-raw-text */
export default {
  // no i18n for privacy (too much trouble to translate)
  nuxtI18n: false
}
</script>
