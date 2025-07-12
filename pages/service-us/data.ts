export interface Service {
  id: string
  title: string
  content: string
}

export const services: Record<string, Service> = {
  '27': {
    id: '27',
    title: '4+2R代謝飲食法',
    content: '4+2R代謝飲食法是一種科學的飲食方案，幫助您更有效地管理體重和提升新陳代謝。這個方法包含了4個主要營養素和2個重要的飲食原則，能夠幫助您達到理想的健康目標。'
  },
  '28': {
    id: '28',
    title: '健康飲食方案',
    content: '我們的健康飲食方案是根據個人需求量身定制的完整營養計劃。包含均衡的營養搭配、定時用餐建議，以及適合的份量控制，幫助您建立健康的飲食習慣。'
  }
} 