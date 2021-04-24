const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.js")

module.exports = {
  future: {
    webpack5: true,
  },
  ...withNextra(),
}
