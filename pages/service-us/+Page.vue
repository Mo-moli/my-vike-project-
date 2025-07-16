<script setup lang="ts">
import { services } from './data'
</script>

<template>
  <div class="service-list">
    <nav class="breadcrumb">
      <a href="../">首頁</a>
      <span class="separator">/</span>
      <span class="current">服務列表</span>
    </nav>
    
    <h1>我們的服務</h1>
    <div class="services">
      <div 
        v-for="(service, id) in services" 
        :key="id"
        class="service-card"
      >
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <a :href="`${id}/`" class="service-link">進入頁面</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-list {
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

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

li {
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}

li a {
  color: #2c3e50;
  text-decoration: none;
  padding: 1.5rem;
  display: block;
  transition: background-color 0.2s;
}

li a:hover {
  background-color: #f8f9fa;
  color: #0066cc;
}
</style> 