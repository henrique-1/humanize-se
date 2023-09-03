/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
        "electric-violet": {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#843dff",
          600: "#7916ff",
          700: "#6b04fd",
          800: "#5a03d5",
          900: "#4b05ad",
          950: "#2c0076",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      mandan: ["Mandan", "sans-serif"],
      cookie: ["Cookie", "cursive"],
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
