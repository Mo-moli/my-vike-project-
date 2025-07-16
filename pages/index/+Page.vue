<template>
  <div>
    <h1>正在跳轉到服務頁面...</h1>
    <p>如果沒有自動跳轉，請<a href="./service-us/27">點擊這裡</a></p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 客戶端重定向
onMounted(() => {
  // 使用相對路徑跳轉
  if (typeof window !== 'undefined') {
    // 獲取當前 base path 並構建正確的 URL
    const basePath = import.meta.env.BASE_URL || '/'
    const targetPath = basePath.endsWith('/') ? basePath + 'service-us/27' : basePath + '/service-us/27'
    window.location.href = targetPath
  }
})
</script>
