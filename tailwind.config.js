/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '1': '#DBDBDB',
        '2': '#FFFFFF',
        '3': '#F6F4F3',
        '4': '#000000',
      },
      height:{
        'full-svh' : '100svh'
      }
    },
  },
  plugins: [],
}

