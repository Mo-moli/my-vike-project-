export const handler = async (event, context) => {
  try {
    const { path: urlPath, httpMethod, headers, body, queryStringParameters } = event
    const url = `https://${headers.host}${urlPath}${queryStringParameters ? '?' + new URLSearchParams(queryStringParameters).toString() : ''}`
    
    // 動態導入 Vike 的服務端渲染函數
    const { renderPage } = await import('vike/server')
    
    const pageContextInit = {
      urlOriginal: url,
      httpMethod,
      headers,
      body
    }
    
    const pageContext = await renderPage(pageContextInit)
    
    if (pageContext.httpResponse) {
      // 確保 headers 是字串鍵值對格式
      const responseHeaders = {}
      if (pageContext.httpResponse.headers) {
        for (const [key, value] of Object.entries(pageContext.httpResponse.headers)) {
          // 確保 value 是字串
          if (Array.isArray(value)) {
            responseHeaders[key] = value.join(', ')
          } else {
            responseHeaders[key] = String(value)
          }
        }
      }
      
      // 設定預設的 Content-Type
      if (!responseHeaders['Content-Type'] && !responseHeaders['content-type']) {
        responseHeaders['Content-Type'] = pageContext.httpResponse.contentType || 'text/html; charset=utf-8'
      }
      
      return {
        statusCode: pageContext.httpResponse.statusCode,
        headers: responseHeaders,
        body: pageContext.httpResponse.body
      }
    }
    
    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      },
      body: '<h1>Page not found</h1>'
    }
  } catch (error) {
    console.error('Netlify function error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      },
      body: `<h1>Internal Server Error</h1><p>${error.message}</p><pre>${error.stack}</pre>`
    }
  }
}
