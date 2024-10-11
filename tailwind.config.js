/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#EBEBEB",
        green: "#59C3C3",
      },
      animation: {
        slideAnim: "slideAnim 20s linear infinite",
      },
      keyframes: {
        slideAnim: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
