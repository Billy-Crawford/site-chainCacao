// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E20",
        secondary: "#C6A700",
        dark: "#0B0F0C",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
}

export default config

