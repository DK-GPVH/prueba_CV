const plugin = require('tailwindcss/plugin');
const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
});


