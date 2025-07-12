<!-- pages/service-us/@id/+Page.vue -->
<script setup lang="ts">
// @ts-ignore
import { useHead } from '@unhead/vue'
// @ts-ignore
import { computed } from 'vue'

interface Props {
  title: string
  ogTitle: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '服務介紹',
  ogTitle: '服務介紹'
})

const title = computed(() => props.title)
const ogTitle = computed(() => props.ogTitle)

useHead({
  title,
  meta: [
    { property: 'og:title', content: ogTitle }
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
  