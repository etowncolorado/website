const path = require('path')

const configureWebpack = (config) => ({
  entry: path.resolve(__dirname, 'entries/browser.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  }
})

module.exports = {
  configureWebpack
}