const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        dosis: ['"Dosis"', 'sans-serif']
      },
      colors: {
        mygold: '#febd59',
        myaquamarine: '#00c2cb',
        mydarkblue: '#141C44',
        mydark: '#000b18',
        mylight: '#f1eef2'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
