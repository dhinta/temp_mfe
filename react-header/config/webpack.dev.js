const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const BASE_PATH = process.env.BASE_PATH || "/";

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 5002,
    historyApiFallback: true,
    open: true,
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
      PRODUCTION: JSON.stringify(false),
      BASE_PATH: JSON.stringify(BASE_PATH),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
