/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['content/**/*.md', 'layouts/**/*.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'oswald' : ['Oswald', 'sans-serif']
      },      
    },
  },
  plugins: [],
}
