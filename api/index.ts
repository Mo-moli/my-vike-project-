// api/index.ts
import { createServer } from 'vite';
import vike from 'vike/plugin';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const viteServer = await createServer({
    plugins: [vike()],
    server: { middlewareMode: true }
  });
  viteServer.middlewares(req, res);
}