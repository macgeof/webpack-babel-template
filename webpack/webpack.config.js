const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
module.exports = {
  entry: {
    main: ['babel-polyfill', './src/js/app.js']
  },
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader
    ]
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.ExtractTextPlugin
  ],
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].js',
    publicPath: '/public'
  }
};