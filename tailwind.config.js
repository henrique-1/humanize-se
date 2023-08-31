/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        supernova: {
          50: "#ffffe7",
          100: "#fdffc1",
          200: "#fffe86",
          300: "#fff541",
          400: "#ffe70d",
          500: "#f2cd00",
          600: "#d19f00",
          700: "#a67202",
          800: "#89580a",
          900: "#74480f",
          950: "#442604",
        },
        "resolution-blue": {
          50: "#e9f8ff",
          100: "#ceeeff",
          200: "#a7e3ff",
          300: "#6bd6ff",
          400: "#26baff",
          500: "#0091ff",
          600: "#0067ff",
          700: "#004cff",
          800: "#0040e6",
          900: "#003db3",
          950: "#003087",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      mandan: ["Mandan", "sans-serif"],
    },
    screens: {
      cellphone: "320px",
      // => @media (min-width: 320px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
