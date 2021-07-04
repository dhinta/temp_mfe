const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 5000,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        "@app-auth": "auth@http://localhost:5001/remoteEntry.js",
        "@app-header": "header@http://localhost:5002/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
