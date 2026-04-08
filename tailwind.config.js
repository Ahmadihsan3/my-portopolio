/** @type {import('tailwindcss').Config} */
export default {
  // WAJIB ADA: Ini memberitahu Tailwind untuk melihat class 'dark' di tag HTML
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}