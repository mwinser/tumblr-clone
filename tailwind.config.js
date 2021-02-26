module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login': "url('5.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
