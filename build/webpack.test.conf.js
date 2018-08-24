const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const AnnotatePlugin = require('../src')

module.exports = {
  entry: {
    test: path.resolve(__dirname, '../test/test.js'),
    test2: path.resolve(__dirname, '../test/test2.js'),
    test3: path.resolve(__dirname, '../test/test3.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: ['babel-loader', 'eslint-loader'],
        include: [path.resolve(__dirname, '../src')]
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new AnnotatePlugin({
      author: 'hanger',
      create: '2018/7/9'
    })
  ]
}
