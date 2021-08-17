const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "./build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(dev)" : "",
      },
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".jsx", ".js"],
  },
};
