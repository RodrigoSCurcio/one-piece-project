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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    },
  },
  plugins: [],
};
export default config;
