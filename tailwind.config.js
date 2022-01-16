const colors = require("@tailwindcss/postcss7-compat/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      colors: {
        primary: '#0582CA',
        teal: colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
