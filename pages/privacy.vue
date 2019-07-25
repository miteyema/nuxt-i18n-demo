<!-- eslint-disable vue-i18n/no-raw-text -->
<template>
  <div>
    <h1 class="title">
      Privacy
    </h1>
    <h2 class="subtitle">
      As I don't have time to translate, this will just stay in English.
      <nuxt-link :to="localePath('index')">
        Go back
      </nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
  // no i18n for privacy (too much trouble to translate)
  nuxtI18n: false
}
</script>
