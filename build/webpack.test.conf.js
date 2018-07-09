const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const AnnotatePlugin = require('../src')
// const AnnotatePlugin = require('../dist/annotate-webpack-plugin.js')

module.exports = {
  entry: {
    test: path.resolve(__dirname, '../test/test.js'),
    test2: path.resolve(__dirname, '../test/test2.js'),
    test3: path.resolve(__dirname, '../test/test3.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist-test')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      },
    ]
  },
  plugins: [
    new AnnotatePlugin({
      author: 'hanger',
      create: '2018/7/9'
    }),
    new UglifyJsPlugin(),
  ]
}
