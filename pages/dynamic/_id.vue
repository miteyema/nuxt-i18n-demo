<template>
  <div>
    <h1 class="title">
      {{ $t('welcome') }}
    </h1>
    <h2 class="subtitle">
      {{ $t('thisIs', { page }) }}
    </h2>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { page: params.id }
  }
}
</script>
