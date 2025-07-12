export { onBeforeRender }

interface PageContext {
  routeParams: {
    id: string
  }
}

async function onBeforeRender(pageContext: PageContext) {
  const { id } = pageContext.routeParams
  const data = await getPageData(id)
  const title = data?.title || '找不到服務名稱'
  return {
    pageContext: {
      pageProps: {
        title,
        ogTitle: title
      },
      documentProps: {
        title
      }
    }
  }
}

async function getPageData(id: string) {
  const fakeDb: Record<string, { title: string }> = {
    '27': { title: '4+2R代謝飲食法' },
    '28': { title: '健康飲食方案' }
  }
  return fakeDb[id]
} 