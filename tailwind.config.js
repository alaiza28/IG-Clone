/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px'
    },
    fontFamily: {
      'font-primary': ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

