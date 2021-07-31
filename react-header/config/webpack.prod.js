const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { DefinePlugin } = require("webpack");
const commonConfig = require("./webpack.common");

const BASE_PATH = process.env.BASE_PATH || "/";

const prodConfig = {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: "[name].[contenthash].js",
    clean: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./headerApp": "./src/bootstrap.js",
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      BASE_PATH: JSON.stringify(BASE_PATH),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
