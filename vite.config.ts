import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/my-vike-project-/' : '/',
  plugins: [
    vike(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
  build: {
    target: "es2022",
  },
});
