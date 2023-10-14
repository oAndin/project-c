/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pattern': ' #ececec',
        'hover-pattern': '#ffd700',
        'dark-gray': '#1F1F1F',
        'lighter-gray' : '#7b7b7b',
      },
    },
    plugins: [],
  }
}