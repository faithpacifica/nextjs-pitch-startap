import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 .pink_container {
	@apply w - full  bg - primary min - h - [530px]  flex justify - center items - center flex - col py - 10 px - 6;
}
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
