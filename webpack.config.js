const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'refinebio.js'
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      config: path.resolve(__dirname, 'src/'),
      dataset: path.resolve(__dirname, 'src/dataset/'),
      resources: path.resolve(__dirname, 'src/resources/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      token: path.resolve(__dirname, 'src/token/')
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
  },
  devtool: 'source-map'
}

// https://webpack.js.org/loaders/babel-loader/#root
// https://webpack.js.org/loaders/babel-loader/#babel-is-injecting-helpers-into-each-file-and-bloating-my-code
// https://webpack.js.org/loaders/babel-loader/#exclude-libraries-that-should-not-be-transpiled
