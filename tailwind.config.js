/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      3: "3px",
    },
    extend: {
      colors: {
        "light-black": "#74787C",
        'orange': "#fbc334",
        "light-orange": "#FFF5F3",
        'yellow':"#ffda48",
        'blue':"#003874"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};


