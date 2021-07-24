const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: "5001",
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./authApp": "./src/bootstrap.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
