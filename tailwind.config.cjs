const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cocogoose", "Atkinson", defaultTheme.fontFamily.sans],
      },
      colors: {
        british: "#506755",
      },
      animation: {
        flow: "flow 30s linear infinite",
      },
      dropShadow: {
        glow: [
          "0 0 10px rgba(255, 255, 255, 0.35)",
          "0 0 35px rgba(255, 255, 255, 0.2)",
        ],
        gleen: [
          "0 0 10px rgba(4, 120, 87, 0.35)",
          "0 0 35px rgba(4, 120, 87, 0.2)",
        ],
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
