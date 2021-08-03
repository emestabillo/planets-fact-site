const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Earth",
      },
    ];
  },
};
