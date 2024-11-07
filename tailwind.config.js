/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["TiroBangla"],
        },
      },
    },
  },
  plugins: [],
};
