/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        yekanbakh : "yekanbakh",
        yekanbakhbold: "yekanbakhbold",
      },
      colors:{
        mainColor: "#b21f01",
      }
    },
  },
  plugins: [],
}
