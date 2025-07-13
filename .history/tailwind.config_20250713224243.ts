import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#EE2B69", // ✅ This will be used by `bg-primary`
        },
        secondary: "#FBE843",
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
