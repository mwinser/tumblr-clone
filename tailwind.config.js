module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login': "url('5.jpg')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'navy': '#001935'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
