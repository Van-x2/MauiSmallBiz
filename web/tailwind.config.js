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
    },
  },
  plugins: []
};