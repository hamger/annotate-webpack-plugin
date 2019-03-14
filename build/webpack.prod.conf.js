const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    filename: 'annotate-plugin.js',
    path: path.resolve(__dirname, '../package'),
    library: 'AnnotatePlugin',
    // libraryTarget: 'umd',
    // libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: []
}
