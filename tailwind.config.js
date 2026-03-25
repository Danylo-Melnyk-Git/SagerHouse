module.exports = {
  content: [
    './index.html',
    './partials/**/*.html',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false // Don't reset browser defaults; we're using our own reset in css/styles.css
  }
}
