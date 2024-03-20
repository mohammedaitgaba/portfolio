/** @type {import('tailwindcss').Config} */

export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sequel': ['Sequel-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

