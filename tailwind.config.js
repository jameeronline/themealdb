/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
// const { createThemes } = require("tw-colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "mesh-pattern": "url('src/assets/bg.png')",
        "hero-pattern": "url('src/assets/bg.svg')",
      },
      colors: {
        // abprimary: "var(--color-primary)",
        // absecondary: "var(--color-secondary)",
        // abbuttons: "var(--color-buttons)",
        // abtypography: "var(--color-typography)",
        primary: colors.orange,
        secondary: colors.indigo,
        typo: colors.neutral,
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // createThemes({
    //   theme1: {
    //     abprimary: "66 133 244",
    //     absecondary: "52 168 83",
    //     abbuttons: "251 188 5",
    //     abtypography: "234 67 53",
    //   },
    //   theme2: {
    //     abprimary: "#a7f442",
    //     absecondary: "#a8349c",
    //     abbuttons: "#fbbc05",
    //     abtypography: "#ea4335",
    //   },
    // }),
  ],
};
