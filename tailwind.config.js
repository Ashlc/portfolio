import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#8B5CF6",
            100: "#F3E8FF",
            200: "#E9D5FF",
            300: "#D8B4FE",
            400: "#C084FC",
            500: "#A855F7",
            600: "#9333EA",
            700: "#7E22CE",
            800: "#6B21A8",
            900: "#581C87"
          },
        },
        focus: "#8B5CF6"
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#A855F7",
            100: "#4C1D95",
            200: "#5B21B6",
            300: "#6D28D9",
            400: "#7C3AED",
            500: "#8B5CF6",
            600: "#A855F7",
            700: "#C084FC",
            800: "#D8B4FE",
            900: "#E9D5FF"
          },
          focus: "#A855F7"
        }
      }
    }
  })],
}
