const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  async redirects() {
    return [
      {
        source: '/les-api',
        destination: '/rechercher-api',
        permanent: true,
      },
      {
        source: '/signup/api',
        destination: '/datapass/api',
        permanent: true,
      },
    ];
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
});
