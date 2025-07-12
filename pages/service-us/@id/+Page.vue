<!-- pages/service-us/@id/+Page.vue -->
<script setup lang="ts">
// @ts-ignore
import { useHead } from '@unhead/vue'

interface Props {
  title: string
  ogTitle: string
}

const props = defineProps<Props>()

useHead({
  title: props.title,
  meta: [
    { property: 'og:title', content: props.ogTitle }
  ]
})
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p>這是服務介紹頁面。</p>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
}
</style>
  