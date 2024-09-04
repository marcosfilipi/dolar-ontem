/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      black: "#000000",
      customBlue: "#0990F9",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {},
      borderRadius: {},
      maxWidth: {
        "1": "100px",
        "1/2": "150px",
        "2": "200px",
      },
    },
  },
  container: {
    center: true,
    padding: {},
  },

  plugins: [],
};
