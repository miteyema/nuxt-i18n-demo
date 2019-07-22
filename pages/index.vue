<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <ul>
      <li v-for="locale in $i18n.locales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
