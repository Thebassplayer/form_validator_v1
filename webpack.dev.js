const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 2. Inject styles into DOM
          "css-loader", // 1. Turn CSS into common.js
        ],
      },
    ],
  },
});
