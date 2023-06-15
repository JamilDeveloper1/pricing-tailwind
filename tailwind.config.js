/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors:{
          lightpink:"#F4F4F4",
          hello:"#2563EB"
        },     
        spacing:{
          '15':"3.75rem"
        }
    },
  },
  plugins: [],
}

