const Dotenv = require('dotenv-webpack');
const withFonts = require('nextjs-fonts');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: false,
// });

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
