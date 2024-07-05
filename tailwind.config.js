/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      primary: '#222225',
      secondary: '#66666e',
      subtle: '#e2e2e5',
      alert: '#ff0025',
      white: '#fff',
      surface: '#9c9ca2',
      neutral: '#333337',
      transparent: 'transparent'
    },

    extend: {
    },
  },
  plugins: [],
}

