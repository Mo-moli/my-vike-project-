<template>
  <a :class="{ active: isActive }">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
import { computed, useAttrs } from "vue";

const pageContext = usePageContext();
const { href } = useAttrs();

const isActive = computed(() => {
  const { urlPathname } = pageContext;
  
  // 確保 href 是 string 類型
  if (typeof href !== 'string') {
    return false;
  }
  
  return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
});
</script>

<style scoped>
a {
  padding: 2px 10px;
  margin-left: -10px;
}
a.active {
  background-color: #eee;
}
</style>
