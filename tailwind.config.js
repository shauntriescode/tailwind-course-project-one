/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
              "./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '987px',
      xl: '1400px'
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      }
    },
  },
  plugins: [],
};