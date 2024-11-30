/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'anime-bg': "url('../assets/anime-bg.jpg')", // Path to your image
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

