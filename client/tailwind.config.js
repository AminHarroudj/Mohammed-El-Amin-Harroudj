/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#068fff",
        secondary: "#1450a3",
      },
    },
  },
  plugins: [],
};
