/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:{
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'midnight-green': '#0B3C49',
      'earth-yellow': '#F3C178',
      'reseda-green': '#79745C',
      'wine': '#632B30',

    },
    fontFamily: {
      'Open-Sans': ['Open Sans', 'sans-serif']
    },
    gridTemplateRows: {
      // Simple 8 row grid
      '8': 'repeat(8, minmax(0, 1fr))',

      // Complex site-specific row configuration
      'layout': '200px minmax(900px, 1fr) 100px',
    }
  }},
  plugins: [require("tw-elements/dist/plugin")],
}
