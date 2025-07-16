<template>
  <div>
    <h1>正在跳轉到服務頁面...</h1>
    <p>如果沒有自動跳轉，請<a href="/service-us/27">點擊這裡</a></p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 客戶端重定向
onMounted(() => {
  // 立即跳轉到 service-us/27
  if (typeof window !== 'undefined') {
    window.location.href = '/service-us/27'
  }
})
</script>
