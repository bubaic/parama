// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-windicss"],
  css: ["~/assets/fonts/index.css", "~/assets/style/global.scss"],

  nitro: {
    prerender: { crawlLinks: true },
  },
  // experimental: { payloadExtraction: true },

  // build: { transpile: ["gsap"] },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: "@use '~/assets/style/global.scss'",
  //     },
  //   },
  // },
});
