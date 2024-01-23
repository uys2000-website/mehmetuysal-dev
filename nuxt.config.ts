// https://nuxt.com/docs/api/configuration/nuxt-config
import { pinia } from "./nuxt.modules";
export default defineNuxtConfig({
  srcDir: "src/",
  site: {
    url: "https://mehmetuysal.dev",
  },
  ssr: true,
  modules: [pinia, "nuxt-simple-sitemap"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
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
    firebase: {
      nodeVersion: "20",
      gen: 2,
      httpsOptions: { region: "us-central1", maxInstances: 3 },
    },
  },
  sitemap: {
    urls: [
      {
        loc: "https://umorse.mehmetuysal.dev",
      },
      {
        loc: "https://url.mehmetuysal.dev",
      },
    ],
  },
});
