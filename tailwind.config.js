/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'md' : '600px',
        'lmd' : '900px',
        'lg' : '1130px',
      },
      fontFamily: {
        sora: ["Sora"],
      },
      backgroundImage: {
        "dark-background": `linear-gradient(
          #210035,
          #5D0096 
        )`,
        "light-background": `linear-gradient(
          #fff,
          #5D0096 
        )`,
        "background2": `linear-gradient(to bottom, rgba(255, 255, 255, 0.4) , transparent)`
      },
      boxShadow: {
        "md": "6px 6px 16px 0 rgba(0,0,0,0.25), -4px -4px 12px 0 rgba(255,255,255,0.3)"
      }
    },
  },
  plugins: [],
};
