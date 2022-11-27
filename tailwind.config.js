/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        yekanbakh : "yekanbakh",
        yekanbakh : "yekanbakh",
        iransans: "iransans",
      },
      colors:{
        mainColor: "#b21f01",
      }
    },
  },
  plugins: [],
}
