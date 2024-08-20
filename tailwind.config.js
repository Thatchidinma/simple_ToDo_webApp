/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'night': "url('./images/bg-desktop-dark.jpg')",
        'checked' : "url('./images/checked.png')",
        'unchecked': "url('./images/unchecked.png')",
        'remove': "url('./images/removeIcon.png')"
      },
      colors:{
        'dark-blue': 'hsl(235, 21%, 11%)',
        'gray-blue': 'hsl(235, 24%, 19%)'
      },
      width:{
        "100" : '32rem'
      }
    },
  },
  plugins: [],
}

