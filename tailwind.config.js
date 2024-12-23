/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleDark: "#4c1d95",
        purpleDarker: "#2b0d5e",
        softWhite: "#EAEAEA",
      },
      clipPath: {
        polygon: "polygon(50% 0%, 49% 100%, 52% 100%)",
      },
    },
  },
  plugins: [],
};
