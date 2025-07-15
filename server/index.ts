// server/index.ts
import { createServer } from 'http';
import express from 'express';
import { renderPage } from 'vike/server';
import type { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.static('dist/client'));

app.get('*', async (req: Request, res: Response, next: NextFunction) => {
  const pageContext = await renderPage({ urlOriginal: req.originalUrl });
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  res.status(httpResponse.statusCode).send(httpResponse.body);
});

createServer(app).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
