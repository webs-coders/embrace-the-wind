/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // important!
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF6A00',
        brandLight: '#FF8C00',
        textDark: '#1A1A1A',
        gold: {
          400: '#FFB300',
          500: '#FF8C00',
          600: '#FF6A00',
        }
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
