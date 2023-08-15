const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    clean: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      config: path.resolve(__dirname, 'src/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      resources: path.resolve(__dirname, 'src/resources/')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

// https://webpack.js.org/loaders/babel-loader/#root
// https://webpack.js.org/loaders/babel-loader/#babel-is-injecting-helpers-into-each-file-and-bloating-my-code
// https://webpack.js.org/loaders/babel-loader/#exclude-libraries-that-should-not-be-transpiled
