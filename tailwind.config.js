module.exports = {
  content: [ './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media',
  
  theme: {
    extend: {
    minHeight: {
    "screen-nonav": "calc(100vh - 88px)",
    },
  },
extend: {}
  
  },
  
  plugins: [],
}