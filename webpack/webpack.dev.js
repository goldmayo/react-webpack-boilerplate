const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "..", "./build"),
    index: "index.html",
    publicPath: "/",
    host: "localhost",
    port: 8000,
    inline: true,
    hot: true,
    overlay: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
