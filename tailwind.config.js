/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f0f4f8',
          DEFAULT: '#3b82f6',
          dark: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
