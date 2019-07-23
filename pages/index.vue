<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('date', { date: $d(new Date(), 'long') }) }}</p>
    <p>
      <nuxt-link to="/privacy">
        {{ $t('privacy') }}
      </nuxt-link>
    </p>
  </div>
</template>
