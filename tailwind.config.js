/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'gr': '40px', // glass radius
      },
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.27)'
      }
    },
  },
  plugins: [],
}