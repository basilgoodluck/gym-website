/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-10": "#d5d8e8",
        "gray-50": "#b6bad1",
        "gray-300": "#9196b5",
        "gray-500": "#525a85",
        "primary-100": "#313b6e",
        "primary-300": "#2c3359",
        "primary-500": "#090f2e",
        "secondary-100": "#db53d0",
        "secondary-300": "#b52faa",
        
      },
      backgroundImage: (theme) => ({
        "gradient-blue": "linear-gradient(90deg, #fff 0%, #090f2e 100%)",
        "mobile-home": "url('./assets/homeImage.png')"
      }),
      fontFamily: {
        signika: ["Signika", "sans-serif"]
      },
      content: {

      }
    },
    screens: {
      "xs": "480px",
      "sm": "768px",
      "md": "1060px"
    }
  },
  plugins: [],
}