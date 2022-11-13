/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],  // Define the location of HTML files, so that the classes they're using can be included inside the style.css, which will be created by tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}
