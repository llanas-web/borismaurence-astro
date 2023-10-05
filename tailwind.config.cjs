/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        flow: "flow 30s linear infinite",
      },
      keyframes: {
        flow: {
          "0%": {
            transform: "translate(0)",
          },
          "100%": {
            transform: "translate(-1050px)",
          },
        },
      },
    },
  },
  plugins: [],
};
