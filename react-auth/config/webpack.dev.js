const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
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
