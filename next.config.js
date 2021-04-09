const withCSS = require("@zeit/next-css");

const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,

  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};
