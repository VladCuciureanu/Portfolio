/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        underline: "var(--color-underline)",
      },
      backgroundImage: {
        spotlight:
          "radial-gradient(600px at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), var(--color-background) 80%);",
      },
    },
  },
  plugins: [],
};
