/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       baseblue: "#2A63B9",
       baseorange:"#E86D18",
       buttonblue:"#0B8CE9"
      },
      borderRadius: {
        '8xl': '3rem', // Example: Add a custom value
      },
      fontFamily: {
        readme: ['ReadMeFont', 'sans-serif'], // Define the custom font here
      },
     
    },
  },
  plugins: [],
}
