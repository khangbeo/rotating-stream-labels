/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greeen: "#bdfcce",
      },
      fontFamily: {
        PO: ['"Poetsen One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
