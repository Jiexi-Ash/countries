/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      colors: {
        bgDark: "#2b3844",
      },
      fontFamily: {
        // add Nunito Sans
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
