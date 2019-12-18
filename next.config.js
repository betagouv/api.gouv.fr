const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  public: [
    "SITE_NAME",
    "SITE_URL",
    "SITE_DESCRIPTION",
    "DEFAULT_LOGO",
    "API_URL",
    "PIWIK_URL",
    "PIWIK_SITE_ID"
  ]
});

module.exports = withConfig();
