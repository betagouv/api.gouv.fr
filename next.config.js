const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
});
