const nextRuntimeDotenv = require('next-runtime-dotenv');

const withFonts = require('nextjs-fonts');

const withSass = require('@zeit/next-sass');

const withConfig = nextRuntimeDotenv({
  public: [
    'SITE_NAME',
    'SITE_URL',
    'SITE_DESCRIPTION',
    'DEFAULT_LOGO',
    'API_URL',
    'PIWIK_URL',
    'PIWIK_SITE_ID',
  ],
});

module.exports = withConfig(
  withSass(
    withFonts({
      webpack(config, options) {
        return config;
      },
    })
  )
);
