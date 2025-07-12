<script setup lang="ts">
// @ts-ignore
const services = [
  { id: '27', title: '4+2R代謝飲食法' },
  { id: '28', title: '健康飲食方案' }
] as const
</script>

<template>
  <div>
    <h1>服務列表</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        <a :href="'/service-us/' + service.id">{{ service.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style> 