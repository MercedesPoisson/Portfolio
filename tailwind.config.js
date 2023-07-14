/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        red: "#E96479",
        purple: "#4D455D",
        green: "#7DB9B6",
        yellow: "#F5E9CF",
        cyan: "#6BCDD2",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        animate: {
          "0%, 20%, 100%": {
            width: "0%"
          },
          "60%, 80%": {
            width: "100%"
          },
        },
        changeColor: { // Agrega los dos puntos ':' para definir el objeto
          "0%": {
            color: "#E96479", /* Color inicial */
          },
          "50%": {
            color: "#6BCDD2", /* Nuevo color */
          },
          "100%": {
            color: "#E96479", /* Color inicial */
          },
        },
        // fullSpin: {
        //   "0%": {
        //     transform: "rotate(0deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg)",
        //   },
        // },
      },
      animation: {
        animate: "animate 6s linear infinite",
        changeColor: "changeColor 6s linear infinite",
        // fullSpin: "fullSpin 3s linear infinite"
      },
     
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".developer": {
          position: "relative",
          color: "slate-300",
          overflow: "hidden",
        },
        ".developer::before": {
          content: ['"I am a Full Stack Developer"'],
          position: "absolute",
          color: "#E96479",
          borderRightWidth: "2px",
          borderRightColor: "#E96479",
          top: "0",
          left: "0",
          width: "0",
          height: "100%",
          overflow: "hidden",
          animation: "animate 6s linear infinite, changeColor 24s linear infinite",
          
         
        },
        // ".box__inner::before": {
        //   content: '""',
        //   position: "absolute",
        //   background: "conic-gradient(#04b0ee 20deg, transparent 120deg)",
        //   width: "450px",
        //   height: "450px",
        //   top: "-60%",
        //   left: "-60%",
        //   animation: "fullSpin",
        // },
        // ".transform-origin-center": {
        //   "transform-origin": "center",
        // },
        // ".box::after": {
        //   content: '"tailwind"',
        //   color: "white",
        //   width: "94%",
        //   height: "94%",
        //   background: "#020223",
        //   position: "absolute",
        //   top: "3%",
        //   left: "3%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   textTransform: "uppercase",
        //   letterSpacing: "2px",
        //   fontWeight: "medium",
        // },
      };
      addUtilities(newUtilities);
    }),
  ],
};