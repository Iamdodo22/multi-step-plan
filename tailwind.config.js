/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
      blue12: 'hsl(213, 96%, 18%)',
      Purple: 'hsl(243, 100%, 62%)',
      blue6: 'hsl(228, 100%, 84%)',
      blue2: 'hsl(206, 94%, 87%)',
      berry: 'hsl(354, 84%, 57%)',
      gray8: 'hsl(231, 11%, 63%)',
      gray4:' hsl(229, 24%, 87%)',
      gray2: 'hsl(217, 100%, 97%)',
      gray1:' hsl(231, 100%, 99%)',
      White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

