/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      orientalBlue: '#364B82',
      lightGray: '#E3DCDC',
      gray: '#9D9D9D',
      lightBlack: '#373737',
    },
    fontFamily: {
      impact: ['impact'],
      helveticaNeue: ['Helvetica Neue'],
    },
    letterSpacing: {
      wider: '.07em',
    },
    extend: {},
  },
  plugins: [],
};
