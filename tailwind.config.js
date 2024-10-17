/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,tmpl,liquid}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        script: ["Rancho", "ui-serif"],
        sans: ['"Source Sans 3"', '"Merriweather Sans"', "ui-sans-serif"],
        serif: ['"Merriweather"', "ui-serif"],
      },
    },
  },
  plugins: [],
};
