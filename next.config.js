require('dotenv').config();
const withFonts = require('nextjs-fonts');
// const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
});
