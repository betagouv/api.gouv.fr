const Dotenv = require('dotenv-webpack');
const withFonts = require('nextjs-fonts');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps(
  withFonts({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      config.plugins.push(new Dotenv({ silent: true }));
      return config;
    },
  })
);
