import { services } from '../data'
import type { Service } from '../data'

export { data }

function data(pageContext: { routeParams: { id: string } }): Service {
  const { id } = pageContext.routeParams
  const service = services[id]
  if (!service) throw new Error(`找不到服務項目：${id}`)
  return service
} 