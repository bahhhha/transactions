/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#00072D",
          50: "#3756FF",
          100: "#2345FF",
          200: "#0027F9",
          300: "#0020D0",
          400: "#001AA7",
          500: "#00147F",
          600: "#000D56",
          700: "#00072D",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
