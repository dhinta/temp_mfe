const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
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
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./authApp": "./src/bootstrap.js",
      },
    }),

    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      BASE_PATH: JSON.stringify(BASE_PATH),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
