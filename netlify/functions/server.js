export const handler = async (event, context) => {
  console.log('Function started')
  console.log('Event:', JSON.stringify(event, null, 2))
  
  try {
    const { path: urlPath, httpMethod, headers, body, queryStringParameters } = event
    const url = `https://${headers.host}${urlPath}${queryStringParameters ? '?' + new URLSearchParams(queryStringParameters).toString() : ''}`
    
    console.log('Processing URL:', url)
    console.log('Method:', httpMethod)
    
    // 動態導入 Vike 的服務端渲染函數
    console.log('Importing vike/server...')
    const { renderPage } = await import('vike/server')
    console.log('Vike imported successfully')
    
    const pageContextInit = {
      urlOriginal: url,
      httpMethod,
      headers,
      body
    }
    
    console.log('Calling renderPage with:', pageContextInit)
    const pageContext = await renderPage(pageContextInit)
    console.log('PageContext received:', pageContext)
    
    if (pageContext.httpResponse) {
      console.log('Has httpResponse, processing headers...')
      
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
      
      console.log('Response headers:', responseHeaders)
      console.log('Response status:', pageContext.httpResponse.statusCode)
      
      return {
        statusCode: pageContext.httpResponse.statusCode,
        headers: responseHeaders,
        body: pageContext.httpResponse.body
      }
    }
    
    console.log('No httpResponse, returning 404')
    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      },
      body: '<h1>Page not found</h1>'
    }
  } catch (error) {
    console.error('Netlify function error:', error)
    console.error('Error stack:', error.stack)
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      },
      body: `<h1>Internal Server Error</h1><p>${error.message}</p><pre>${error.stack}</pre>`
    }
  }
}
