const path = require('path')
const { createRequire } = require('module')

// 設定模組解析路徑
const require2 = createRequire(path.join(process.cwd(), 'dist', 'server', 'entry.mjs'))

exports.handler = async (event, context) => {
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
      return {
        statusCode: pageContext.httpResponse.statusCode,
        headers: {
          ...pageContext.httpResponse.headers,
          'Content-Type': pageContext.httpResponse.contentType || 'text/html; charset=utf-8'
        },
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
