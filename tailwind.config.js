/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        taiwan: {
          50: '#fef3f2',
          100: '#fde8e4',
          200: '#fbd7ce',
          500: '#f97960',
          600: '#f85230',
          900: '#7c2817',
        },
      },
    },
  },
  plugins: [],
}
