// Without this file, `tsc` will fail with such errors:
//     pages/+config.ts:2:20 - error TS2307: Cannot find module '../layouts/LayoutDefault.vue' or its corresponding type declarations.
//       import Layout from "../layouts/LayoutDefault.vue";
//                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// See https://stackoverflow.com/questions/71477277/typescript-cannot-find-module-in-vue-project

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
