/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        veryLightGray: '#FAFAFA',
        veryPaleRed: 'hsl(12, 100%, 95%)',
        brightRedSupLight: 'hsl(12, 88%, 90%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'rgb(36,45,82)',
        darkGrayishBlue: 'rgb(144,149,167)',
        verydarkBlue: 'hsl(233, 12%, 13%)',
      },
    },
  },
  plugins: [],
};
