<script setup lang="ts">
import { useData } from 'vike-vue/useData'
import type { Service } from '../data'
const data = useData<Service>()
</script>

<template>
  <title>{{ data.title }}</title>
  <meta property="og:title" :content="data.title" />
  <meta property="og:description" :content="data.description" />
  <meta property="og:image" :content="data.image" />
  <meta property="og:url" :content="data.url" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" :content="data.title" />
  <meta name="twitter:description" :content="data.description" />
  <meta name="twitter:image" :content="data.image" />
</template>
