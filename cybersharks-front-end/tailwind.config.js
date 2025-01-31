/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // chad suggestion
  ],

  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        openSans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        customWhite: "#fffdfc",
        customBlack: "#1a1a1a",
        // which orange???
        accent1: "#FF6606",
      },
    },
  },
  plugins: [require("daisyui")],
};
