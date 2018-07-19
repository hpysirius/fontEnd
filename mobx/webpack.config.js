const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  // loader webpack 如何编译
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      }
    }]
  },
  devtool: 'inline-source-map'
};

module.exports = config;