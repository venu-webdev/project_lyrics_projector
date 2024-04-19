/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        anektelugu: ["Anek Telugu", "system-ui"]
      },
      colors:{
        'green-dark':'#385A0B',
        'green-medium':'#477012',
        'green-normal':'#65A019',
        'green-light':'#DCFFB0',
        'green-semi-light':'#DCFFB0',
      }
    },
  },
  plugins: [],
}

