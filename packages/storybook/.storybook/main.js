const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  addons: ["@storybook/addon-docs"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /module\.s(a|c)ss$/,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("postcss-loader"),
        require.resolve("sass-loader")
      ]
    });
    config.module.rules.push({
      test: /^((?!module).)+\.s(a|c)ss$/,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("postcss-loader"),
        require.resolve("sass-loader")
      ]
    });

    return config;
  }
};
