// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { pageTransition: { name: "page", mode: "out-in" } },
  build: { transpile: ["gsap"] },
  css: ["~/assets/fonts/index.css", "~/assets/style/global.scss"],
  modules: ["nuxt-windicss"],
  nitro: { prerender: { crawlLinks: true } },
  vite: { build: { cssCodeSplit: true, outDir: "dist" } },
});
