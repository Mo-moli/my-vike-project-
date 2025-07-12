<!-- pages/service-us/@id/+Page.vue -->
<script setup lang="ts">
interface Props {
  title?: string
  ogTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '預設標題',
  ogTitle: '預設 OG 標題'
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
  