/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      screens: {
        xs: "240px",
        sm: "480px",
        md: "720px",
        lg: "976px",
        xlg:"1200px",
        xl: "1440px",
        "2xl": "1536px",
      },
      colors: {
        kekaBlue: "#1762E2",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};
