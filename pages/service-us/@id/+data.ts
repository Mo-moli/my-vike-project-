import { services } from '../data'
import type { Service } from '../data'

export default function onBeforeRender(pageContext: { routeParams: { id: string } }) {
  const { id } = pageContext.routeParams
  const service = services[id]
  
  if (!service) {
    const errorMessage = `找不到服務項目：${id}`
    console.error(errorMessage)
    
    return {
      pageContext: {
        pageProps: {
          error: errorMessage
        },
        title: '服務不存在',
        description: '找不到請求的服務項目'
      }
    }
  }

  return {
    pageContext: {
      pageProps: {
        service
      },
      title: service.title,
      description: service.content.slice(0, 150) + '...'
    }
  }
} 