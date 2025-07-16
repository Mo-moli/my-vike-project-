export interface Service {
  title: string
  description: string
  image: string
  url: string
}

export const services: Record<string, Service> = {
  '27': {
    title: 'ogTitle-1',
    description: '4+2R代謝飲食法是一套科學化的營養計劃，專門設計用來提升新陳代謝，幫助您更有效地管理體重。',
    image: 'https://your-domain.com/images/27.jpg',
    url: 'https://your-domain.com/service-us/27'
  },
  '28': {
    title: 'ogTitle-2',
    description: '我們的健康飲食方案是一個全方位的營養計劃，適合想要建立健康飲食習慣的人士。',
    image: 'https://your-domain.com/images/28.jpg',
    url: 'https://your-domain.com/service-us/28'
  }
} 