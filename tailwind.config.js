/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  darkMode: "class", // Modo oscuro activado con clase "dark"
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
