const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 15s ease infinite'
      },
      'keyframes': {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
    fontFamily: {
      'poppins': 'Poppins',
      'rokkitt': 'Rokkitt',
      'ubuntu': 'Ubuntu',
      'alfa': 'Alfa Slab One'
    },
    fontSize: {
      'h1': '2rem',
      'h2': '1.2rem',
      'f1': '.66rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
