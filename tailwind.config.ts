import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f1e5d8",
        "background-dark": "rgb(28, 25, 23)",
        "background-light": "rgb(241, 229, 216)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        darkSpotlight:
          "radial-gradient(600px at var(--spotlight-x) var(--spotlight-y), rgb(249 115 22 / 0.125), transparent 80%)",
        lightSpotlight:
          "radial-gradient(600px at var(--spotlight-x) var(--spotlight-y), rgb(255 255 255 / 0), transparent 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
