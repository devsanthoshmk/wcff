/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'], // Add the Unbounded font
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms'
      },
      transitionDelay: {
        '150': '150ms'
      },
    },
  },
  plugins: [],
};
