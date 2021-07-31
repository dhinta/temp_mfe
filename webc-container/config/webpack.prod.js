const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");

const domain = process.env.DOMAIN;
const basePath = process.env.BASE_PATH || "/";

const prodConfig = {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        "@app-auth": `auth@${domain}/auth/remoteEntry.js`,
        "@app-header": `header@${domain}/header/remoteEntry.js`,
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      BASE_PATH: JSON.stringify(basePath),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
