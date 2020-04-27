const Dotenv = require('dotenv-webpack');
const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
});
