/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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
        purple: "#0a192f",
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
            width: "0%",
          },
          "60%, 80%": {
            width: "100%",
          },
        },
        changeColor: {
          "0%": {
            color: "#E96479",
          },
          "50%": {
            color: "#6BCDD2",
          },
          "100%": {
            color: "#E96479",
          },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
        },
        scroll: {
          "10%": {
            transform: "translateY(-112%)",
          },
          "25%": {
            transform: "translateY(-104%)",
          },
          "35%": {
            transform: "translateY(-212%)",
          },
          "50%": {
            transform: "translateY(-204%)",
          },
          "60%": {
            transform: "translateY(-312%)",
          },
          "75%": {
            transform: "translateY(-304%)",
          },
          "85%": {
            transform: "translateY(-412%)",
          },
          "100%": {
            transform: "translateY(-404%)",
          }, // Aquí está el corchete faltante
        }, 
      },
      animation: {
        animate: "animate 6s linear infinite",
        changeColor: "changeColor 6s linear infinite",
        scroll: "scroll 7s infinite",
      },
    },
  },
  variants: {
    // Tus configuraciones de variantes aquí
  },
  plugins: [
    Myclass,
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".developer": {
          position: "relative",
          color: "slate-300",
          overflow: "hidden",
        },
        ".developer::before": {
          content: ['"Full Stack Developer"'],
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
      };
      addUtilities(newUtilities);
    }),
  ],
};

// porque no sube esta config