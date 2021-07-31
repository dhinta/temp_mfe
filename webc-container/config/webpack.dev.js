const commonConfig = require("./webpack.common");
const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const basePath = process.env.BASE_PATH || "/";

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 5000,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        "@app-auth": "auth@http://localhost:5001/remoteEntry.js",
        "@app-header": "header@http://localhost:5002/remoteEntry.js",
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      BASE_PATH: JSON.stringify(basePath),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
