// pages/service-us/@id/+config.ts
export default {
  route: '/service-us/@id',
  
  meta: {
    title: {
      env: { server: true, client: true },
      value: '服務介紹'
    },
    ogTitle: {
      env: { server: true, client: true },
      value: '服務介紹'
    }
  },

  onBeforeRender: './+onBeforeRender.ts'
}
  