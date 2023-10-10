const { deepFreeze } = require("../utils/deep-freeze");

/**
 * Application configuration
 */
const config = deepFreeze({
  server: {
    port: 3000,
  },
});

module.exports = { config };
