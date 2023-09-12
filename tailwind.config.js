/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#010143",
        "dark-blue": "#03396c",
        "accent-blue": "#005b96",
        "lighter-blue": "#6497b1",
        "lightest-blue": "#b3cde0",
      },
    },
  },
  plugins: [],
};
