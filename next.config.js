const path = require("path");
const withImages = require("next-images");
module.exports = withImages({
  exclude: path.resolve(__dirname, "src/assets/svg"),
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  reactStrictMode: true,
};
