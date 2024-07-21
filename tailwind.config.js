/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    { pattern: /^border-/ },
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
  ],
  theme: {
    extend: {
      colors: {
        gray: '#D9D9D9',
        yellow: '#E8B607',
        red: '#FF0000',
      },
      fontFamily: {
        kiwi: ['Kiwi Maru', 'sans-serif'],
        montSerrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'number-pattern': "url('/src/assets/images/sp_bg.jpg')",
      }),
    },
  },
  plugins: [],
};
