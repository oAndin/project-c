/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pattern': ' #efefef',
        'hover-pattern': '#ffd700',
        'dark-gray': '#1F1F1F',
      },
    },
    plugins: [],
  }
}