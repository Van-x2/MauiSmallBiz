/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['Leckerli One', 'cursive'],
        mukta: ['Mukta', 'sans-serif']
      },
      colors: {
        primary: "#688B58",
        secondary: "#A78682",
        lightGreen: "#EEF5DB",
        lightgray: "#F2F2F2",
        darkgray: "#343330",
      },
      screens: {
        '-2xl': { max: '1535px' },  // Reversed from 2xl (min-width: 1536px)
        '-xl': { max: '1279px' },   // Reversed from xl (min-width: 1280px)
        '-lg': { max: '1023px' },   // Reversed from lg (min-width: 1024px)
        '-md': { max: '767px' },    // Reversed from md (min-width: 768px)
        '-sm': { max: '639px' },    // Reversed from sm (min-width: 640px)
      },
    },
  },
  plugins: []
};