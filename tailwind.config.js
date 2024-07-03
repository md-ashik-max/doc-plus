/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFE03D',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

