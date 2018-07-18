const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    filename: 'annotate-webpack-plugin.js',
    path: path.resolve(__dirname, '../dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
}
