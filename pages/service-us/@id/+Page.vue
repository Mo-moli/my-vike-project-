<!-- pages/service-us/@id/+Page.vue -->
<script setup lang="ts">
import { useData } from 'vike-vue/useData'
import type { Service } from '../data'
const data = useData<Service>()
</script>

<template>
  <div class="service-detail">
    <nav class="breadcrumb">
      <a href="../../">首頁</a>
      <span class="separator">/</span>
      <a href="../">服務列表</a>
      <span class="separator">/</span>
      <span class="current">{{ data.title }}</span>
    </nav>
    
    <div class="content-wrapper">
      <h1>{{ data.title }}</h1>
      <div class="content">
        {{ data.description }}
      </div>
      <div class="back-link">
        <a href="../">
          <span class="back-arrow">←</span>
          <span>返回服務列表</span>
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
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
}

.breadcrumb a {
  color: #0066cc;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  color: #999;
  font-size: 1.1rem;
}

.current {
  color: #666;
}

.content-wrapper {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 2rem;
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
  white-space: pre-line;
}

.back-link {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.back-link a {
  color: #0066cc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  padding: 0.5rem 0;
}

.back-link a:hover {
  text-decoration: underline;
}

.back-arrow {
  font-size: 1.4rem;
  line-height: 1;
}
</style>
  