import { renderPage } from 'vike/server'

export async function handler(event, context) {
  const { path, httpMethod, headers, body } = event
  const url = `https://${headers.host}${path}`
  
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
      headers: pageContext.httpResponse.headers,
      body: pageContext.httpResponse.body
    }
  }
  
  return {
    statusCode: 404,
    body: 'Page not found'
  }
}
