module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        brand: "'Nunito Sans','sans-serif'"
      }
    }
    // colors: {
    //   red: {
    //     dark: '#250404'
    //   },
    //   yellow: {
    //     dark: '#FAA307'
    //   },
    //   coolGray: {
    //     light: '#BDC6D1'
    //   },
    //   green: {
    //     light: '#81DCD7'
    //   },
    //   purple: {
    //     regular: '#7F00FF',
    //     light: '#6267AB'
    //   },
    //   white: {
    //     regular: '#FCFCFC'
    //   },
    //   pink: {
    //     hot: '#c400fa'
    //   },
    //   black: {
    //     dark: '#14151c'
    //   }
    // }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
