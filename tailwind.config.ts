import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6fbff",
          100: "#c4f3fb",
          200: "#8be6f7",
          300: "#54d1ee",
          400: "#2fc1e6",
          500: "#14a9cd",
          600: "#0f86a6",
          700: "#0d6a84",
          800: "#0e566b",
          900: "#0f495a"
        }
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, #2d183f 0%, #4b4665 100%)"
      }
    }
  },
  plugins: [],
} satisfies Config;
