/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],   // NPM will look for all the files with ".html" extension; inside that look for all the classess inside those HTMLs to generate the CSS inside the "build/css/*.css" folder. What if there is a class mentioned in the JS & tailwind cannot build that inside the css-dirl then JS calls the functions. Thus include all the JS file, if there are any tailwindcss-classname, it'll automatically includes inside the CSS-dir.
  theme: {
    extend: {
      // Custom media queries
      screens: {
        'widescreen': { 'raw':'(min-aspect-ratio: 3/2)' },  // wider than it's tall (width:3; height:2)
        'tallscreen': { 'raw':'(min-aspect-ratio: 13/20)' },  // twice as tall than it's width (width:1; height:2); aspect-ratio of 65% or, 13/20 of width than height
      },
      // Custom Animation
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
