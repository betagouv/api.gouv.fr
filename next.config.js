const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  public: [
    "SITE_NAME",
    "SITE_URL",
    "SITE_DESCRIPTION",
    "DEFAULT_LOGO",
    "API_URL"
  ]
});

module.exports = withConfig();
