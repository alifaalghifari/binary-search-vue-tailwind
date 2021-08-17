module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'other-blue' : '#3FC5F0',
      'other-green' : '#CBEAED',
      'gray-blue' : '#FF4057'
    }
  },
    
  },
  variants: {
    extend: {
      fontSize: ["hover"]
    },
  },
  plugins: [],
}
