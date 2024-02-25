/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'logo-200': 'rgb(116, 191, 22)',
        'logo-300': 'rgb(99, 174, 4)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
