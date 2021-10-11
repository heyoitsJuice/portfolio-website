module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {
      'sm': '480px',
      // => @media (min-width: 640px) {...}
      
      'md': '547px',
      // => @media (min-width: 768px) {...}

      'lg': '768px',
      // => @media (min-width: 1024px) {...}

      'xl': '1024px',
      // => @media (min-width: 1280px) {...}

      '2xl': '1680px'
      // => @media (min-width: 1536px) {...}

    },
    extend: {
      colors: {
        primary: "#A0AEC0",
        gray: {
          300: "#E2E8F0",
          600: "#718096"
        },
        red: {
          400: "FC8181",
          500: "#F56565"
        },
        orange: {
          400: "#F6AD55"
        },
        yellow: {
          200: "#FEFCBF"
        },
        green: {
          400: "#68D391"
        },
        indigo: {
          400: "#7F9CF5"
        },
        blue: {
          nav: "#365168"
        }

      },
      fontFamily: {
        mullish: "'Mullish', sans-serif",
        overpass: "'Overpass', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
