<!-- pages/service-us/@id/+Page.vue -->
<script setup lang="ts">
import type { Service } from '../data'
import { ref, onMounted } from 'vue'

// @ts-ignore
const props = defineProps<{
  service?: Service
  error?: string
}>()

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <div class="service-detail">
    <nav class="breadcrumb">
      <a href="/service-us">服務列表</a>
      <template v-if="!error">
        / <span>{{ props.service?.title }}</span>
      </template>
    </nav>
    
    <div v-if="error" class="error-wrapper">
      <h1>找不到服務</h1>
      <p>{{ error }}</p>
      <div class="back-link">
        <a href="/service-us">
          <span class="arrow">←</span> 返回服務列表
        </a>
      </div>
    </div>
    
    <div v-else class="content-wrapper">
      <h1>{{ props.service?.title }}</h1>
      <div class="content">
        {{ props.service?.content }}
      </div>
      <div class="back-link">
        <a href="/service-us">
          <span class="arrow">←</span> 返回服務列表
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.breadcrumb {
  margin-bottom: 1rem;
  color: #666;
}

.breadcrumb a {
  color: #0066cc;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.content-wrapper,
.error-wrapper {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 2rem;
}

.error-wrapper {
  text-align: center;
  color: #666;
}

.error-wrapper h1 {
  color: #dc3545;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.content {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.back-link {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.back-link a {
  color: #0066cc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-link a:hover {
  text-decoration: underline;
}

.arrow {
  font-size: 1.2rem;
}
</style>
  