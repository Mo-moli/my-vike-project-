import vikeVue from "vike-vue/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.vue";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",

  // 啟用預渲染以支援 GitHub Pages 靜態部署
  prerender: true,

  extends: vikeVue as typeof vikeVue,
} satisfies Config;
