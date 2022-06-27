module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'md': '6px 5px 4px 0px rgba(0, 0, 0, 0.25)',
      'image': '0.5px 0.5px 12px 0px rgba(0, 0, 0, 0.25)'

    },
    fontFamily: {
      "redrose": ["Red Rose"],
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'Almarai': ['Almarai'],
      'roboto': ['Roboto']
    },
    colors: {
      "menutopbar": "#F0E9E9",
      "mainbar": "#FFD333"
    },
    screen: {
      "laptop": "1460px",
    }
  },
  plugins: [],
}