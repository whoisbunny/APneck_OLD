/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A97F",
        primary1: "#2b3d4c",
        primary2: "#354d61",
        light: "rgba(133,198,218,255)",
        dark: "rgba(13,13,10,255)",
        darker: "rgba(234,157,90,255)",
      lighter: "#cbd6cf",
        lighter1: "#c3dacc86",
        lighter2:'#e4f0e9da',
        darken: '#cca27e',
        color: 'orangered',
        search: '#FF6000',
        white:'#f1f1f1',
        
      },
    },
  },
  plugins: [],
};
