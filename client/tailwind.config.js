/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      c1: "#0EACA1",
      c2: "#FFFFFF",
      c3: "#214D4A",
      c4: "#FF903F",
      c7: "#0C9200",
    },
    extend: {},
  },
  plugins: [],
})

