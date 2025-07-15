// api/index.ts
import { createServer } from 'vite';
import vike from 'vike/plugin';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { PluginOption } from 'vite';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const viteServer = await createServer({
    plugins: vike() as any,
    server: { middlewareMode: true }
  });
  viteServer.middlewares(req, res);
}