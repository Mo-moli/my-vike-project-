export default {
  route: '/service-us',
  
  // 啟用預渲染
  prerender: true,
  
  meta: {
    title: {
      env: { server: true, client: true },
      value: '服務列表'
    }
  }
} 