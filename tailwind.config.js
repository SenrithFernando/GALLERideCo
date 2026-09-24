export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: "#101820",
        ivory: "#f5f1e8",
        sand: "#e7dfd1",
        copper: "#c76b3a",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Barlow Condensed", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
