/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'semibold': 200,
        'regular': 300,
        'medium': 400,
        'light': 500,
        'extralight': 600,
        'extrabold': 700,
        'bold': 800,
        'black': 900
      },
    },
  },
  plugins: [],
}

