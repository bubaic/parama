// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss"],
  css: ["~/assets/fonts/index.css", "~/assets/style/global.scss"],

  nitro: {
    prerender: { crawlLinks: true },
  },

  // build: { transpile: ["gsap"] },
  app: { pageTransition: { name: "page", mode: "out-in" } },
  vite: { build: { cssCodeSplit: true, outDir: "dist" } },
});
