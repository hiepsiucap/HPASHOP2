/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        Primarycolor1: "hsl(22, 28%, 21%)",
        Primarycolor2: "hsl(22, 28%, 29%)",
        PrimaryColor3: "hsl(22, 28%, 37%)",
        PrimaryColor4: "hsl(22, 28%, 45%)",
        PrimaryColor5: "hsl(22, 31%, 60%)",
        PrimaryColor6: "hsl(22, 31%, 67%)",
        PrimaryColor7: "hsl(22, 31%, 74%)",
        PrimaryColor8: "hsl(22, 31%, 80%)",
        SelectedColor: "rgba(255,255,255,0.08)",
        Neutral900: "#111827",
        Neutral300: "#D1D5DB",
      },
      fontFamily: {
        sanss: ["Inter", "san-serif"],
      },
      backgroundImage: { 'image1': "url()"}
    },
  },
  plugins: [],
};
