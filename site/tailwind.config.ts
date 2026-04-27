import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131110",
        bg2: "#1c1916",
        foreground: "#e2dcd4",
        muted: "#8a8078",
        accent: "oklch(0.52 0.07 32)",
        accent2: "oklch(0.48 0.06 200)",
        line: "rgba(226,220,212,0.12)",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
