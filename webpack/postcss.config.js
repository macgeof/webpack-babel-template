const postcssCustomMedia = require('postcss-custom-media');
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 5%'],
      grid: true,
      stage: 0,
      features: {},
      autoprefixer: {
        grid: true
      }

    },
    'postcss-custom-media': {
      postcssCustomMedia
    },
  }
};