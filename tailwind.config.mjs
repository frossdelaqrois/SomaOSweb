/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        soma: {
          black: "#050505",
          panel: "#111111",
          green: "#1F5B3B",
          emerald: "#2B8C56",
          gold: "#D9C27A",
          cream: "#F8F3D6",
          text: "#F0F0F0",
        },
      },
      fontFamily: {
        display: ["Cinzel Decorative", "Uncial Antiqua", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "IBM Plex Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 38px rgba(43, 140, 86, 0.32)",
        gold: "0 0 24px rgba(217, 194, 122, 0.22)",
      },
    },
  },
  plugins: [],
};
