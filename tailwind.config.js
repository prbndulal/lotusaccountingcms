/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lotus-red': '#C41E3A',
        'lotus-red-dark': '#9B1B30',
        'lotus-green': '#2E7D32',
        'lotus-green-dark': '#1B5E20',
        'lotus-charcoal': '#1E1E1E',
        'lotus-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

