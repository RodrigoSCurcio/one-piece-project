import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/assets/imgs/one-piece-wallpaper.png')",
      },
      colors: {
        "op-dark-coral": "#c8472c",
        "op-dark-chocolate": "#412a1e",
        "op-lemon-yellow": "#f8de3c",
        "op-white": "#fefefe",
        "op-sky-blue": "#58acf4",
        "op-royal-blue": "#105edd",
        "op-navy-blue": "#0b3075",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
