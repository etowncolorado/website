const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

const configureWebpack = (config) => ({
  entry: path.resolve(__dirname, 'entries/browser.js'),

  resolve: {
    alias: {
      '@': path.resolve(__dirname)
    }
  },

  plugins: [
    new PurgecssPlugin({
      paths: glob.sync([
        path.resolve(__dirname, './**/*.html'),
        path.resolve(__dirname, './**/*.vue'),
      ])
    })
  ]
})

module.exports = {
  configureWebpack
}