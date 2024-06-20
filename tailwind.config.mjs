import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      128: "128px",
      192: "192px",
      256: "256px",
      512: "512px",
    },
    fontSize: {
      h1: "72px",
      h2: "58px",
      h3: "48px",
      h4: "32px",
      h5: "20px",
      h1: "72px",
      body: "14px",
      sub: "11px",
    },
    extend: {
      fontFamily: {
        sans: ['"Manrope Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['"Bodoni Moda Variable"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        r: "#FF0000",
        g: "#00FF00",
        b: "#0000FF",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
            fontFamily: '"Manrope Variable"',
            a: {
              color: "#00ff00",
              "&:hover": {
                color: "#ff00ff",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
