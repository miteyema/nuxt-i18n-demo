<template>
  <div>
    <h1 class="title">
      {{ $t('welcome') }}
    </h1>
    <h2 class="subtitle">
      {{ $t('date', { date: $d(new Date(), 'long') }) }}
    </h2>
    <p>
      <nuxt-link to="/privacy">
        {{ $t('privacy') }}
      </nuxt-link>
    </p>
  </div>
</template>
