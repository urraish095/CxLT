/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#04FF00',
        'secondary': '#17222a'
      },
      fontFamily: {
        'primary': ['Cera-Pro-Bold', 'Roboto'],
        'secondary': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}