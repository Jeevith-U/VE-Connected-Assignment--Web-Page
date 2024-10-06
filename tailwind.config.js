/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#4CAF4F",
      primary_light: "#A5D6A7",
      white: "#FFF",
      black: "#263238",
      grey: "#4D4D4D",
      grey2: "#717171",
      silver: "#F5F7FA"
    },
    height: {
      home: "29rem"
    }
  },
  plugins: [],
}

