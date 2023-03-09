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
  }},
  plugins: [],
}
