// https://nuxt.com/docs/api/configuration/nuxt-config
import { pinia } from "./nuxt.modules";

export default defineNuxtConfig({
  srcDir: "src/",
  ssr: true,
  modules: [pinia],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/style/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: "firebase",
  },
});
