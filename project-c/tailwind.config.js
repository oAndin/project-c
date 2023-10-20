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
        'sucess-green' : '#155724',
        'sucess-bg' : '#D4EDDA',
        'sucess-border' : '#C3E6CB',
        'error-red':'#721c24',
        'error-bg':'#f8d7da',
        'error-border':'#f5c6cb',
        'infrastructure':'#FFAEBC',
        'development':'#A0E7E5',
        'design':'#B4F8C8',
        'planning':'#FBE7C6',
      },
    },
    plugins: [],
  }
}