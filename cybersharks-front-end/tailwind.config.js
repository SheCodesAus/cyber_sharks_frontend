/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#fffdfc",
        customBlack: "#1a1a1a",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [require("daisyui")],
};
