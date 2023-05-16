/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'primary': {
        DEFAULT: '#912D3F',
        light: '#BF6E7D',
        dark: '#511A21'
      },
      'black': '#000000',
      'gray': '#464646',
      'white': '#FFFFFF',
      'accent': '#F9C71B'

    }
  },
  plugins: [],
}

