import { redirect } from 'vike/abort'

export { onBeforeRender }

function onBeforeRender() {
  // 直接重定向到 service-us/27
  throw redirect('/service-us/27')
} 