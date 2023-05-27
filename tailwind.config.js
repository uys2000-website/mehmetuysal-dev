/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/style/*.css",
    "./src/components/**/*.{vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.ts",
    "./src/app.vue",
  ],
  theme: {
    extend: {
        screens: {
            'tablet': '640px',
            'desktop': '1024px',
          },
      colors:{
        primary: "#000000",
        secondary: "#ffffff"
      }
    },
  },
  plugins: [],
}

