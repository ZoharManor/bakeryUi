/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d4a44',
          dark: '#1a2e2b',
        },
        cream: '#f5f0e8',
        gold: {
          DEFAULT: '#c8a96e',
          dark: '#b8944e',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Heebo', 'sans-serif'],
      },
      scale: {
        '103': '1.03',
      },
    },
  },
  plugins: [],
}
