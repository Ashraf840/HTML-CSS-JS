/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],   // NPM will look for all the files with ".html" extension to build inside the "build" folder
  theme: {
    extend: {
      // Custom media queries
      screens: {
        'widescreen': { 'raw':'(min-aspect-ratio: 3/2)' },  // wider than it's tall (width:3; height:2)
        'tallscreen': { 'raw':'(min-aspect-ratio: 1/2)' },  // twice as tall than it's width (width:1; height:2)
      }
    },
  },
  plugins: [],
}
