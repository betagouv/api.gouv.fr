const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  public: ["API_URL"]
});

module.exports = withConfig();
