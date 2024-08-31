/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'full-svh' : '100svh'
      }
    },
  },
  plugins: [],
}

