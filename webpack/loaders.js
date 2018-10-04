const plugins = require('./plugins');

const CSSLoader = {
  test: /\.(scss|css|eot|svg|ttf|woff|jpg|png)$/,
  use: plugins.ExtractTextPlugin.extract({
    use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          url: false,
          sourceMap: false
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: __dirname + '/postcss.config.js'
          }
        },
      },
      {
        loader: 'sass-loader'
      }
    ],
  }),
};

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }
};
const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
};

module.exports = {
  JSLoader,
  ESLintLoader,
  CSSLoader
};