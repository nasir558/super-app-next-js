/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      GreenC: '#71D08D',
      WhiteC: '#ffffff',
      LightGreyC: '#FAFAFA',
      LightGrey1C: 'rgba(0, 0, 0, 0.1)',
      LightGrey2C: '#CDCDCD',
      BlackC: '#222222',
      DarkGrey1C: '#636363',
      DarkGrey2C: '#656565',
      DarkGrey3C: '#A4A4A4'

    },
    extend: {
      boxShadow: {
        'loginForm': '0px 1px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
